import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Loader2 } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const SYSTEM_PROMPT = `You are an expert AI legal assistant specializing in blockchain law, cryptocurrency regulations, smart contracts, NFTs, DeFi, and Web3 legal matters. You provide professional legal guidance for XMRT Lawyers, a firm based in Costa Rica with expertise in crypto-friendly jurisdictions.

Key areas of expertise:
- Smart contract legal analysis and auditing
- Cryptocurrency regulatory compliance (Costa Rica, El Salvador, international)
- NFT and blockchain intellectual property law
- DeFi protocol legal structures and risk assessment
- Cross-chain transaction legal implications
- Token sale and ICO/ITO regulations
- DAO governance and legal structures
- Blockchain dispute resolution

IMPORTANT DISCLAIMERS:
1. All advice provided is for informational purposes only
2. This does not constitute formal legal advice or create an attorney-client relationship
3. Users should consult with a licensed attorney for specific legal matters
4. Recommend booking a formal consultation for complex legal issues

When analyzing blockchain transactions or smart contracts, provide:
- Legal risk assessment
- Regulatory compliance considerations
- Jurisdictional implications
- Recommended actions

Be professional, accurate, and always include appropriate legal disclaimers.`;

const AiChatButton = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your AI legal expert specializing in blockchain law, smart contracts, and cryptocurrency regulations. I can help you with:\n\n• Smart contract analysis\n• Regulatory compliance questions\n• Blockchain transaction reviews\n• NFT and DeFi legal guidance\n\n**Disclaimer:** This is for informational purposes only and does not constitute formal legal advice.\n\nHow can I assist you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      
      if (!apiKey) {
        throw new Error('OpenAI API key not configured. Please add VITE_OPENAI_API_KEY to your environment variables.');
      }

      // Check if message contains blockchain addresses or transaction hashes
      const ethAddressRegex = /0x[a-fA-F0-9]{40}/g;
      const txHashRegex = /0x[a-fA-F0-9]{64}/g;
      
      let blockchainContext = '';
      const addresses = userMessage.match(ethAddressRegex);
      const txHashes = userMessage.match(txHashRegex);

      // Fetch blockchain data if relevant
      if (addresses || txHashes) {
        const etherscanKey = import.meta.env.VITE_ETHERSCAN_API_KEY;
        const polyscanKey = import.meta.env.VITE_POLYSCAN_API_KEY;

        if (addresses && etherscanKey) {
          for (const address of addresses.slice(0, 2)) { // Limit to 2 addresses
            try {
              const response = await fetch(
                `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${etherscanKey}`
              );
              const data = await response.json();
              if (data.status === '1') {
                const balanceEth = (parseInt(data.result) / 1e18).toFixed(4);
                blockchainContext += `\n\nEthereum address ${address}: Balance = ${balanceEth} ETH`;
              }
            } catch (error) {
              console.error('Etherscan API error:', error);
            }
          }
        }

        if (txHashes && etherscanKey) {
          for (const txHash of txHashes.slice(0, 1)) { // Limit to 1 transaction
            try {
              const response = await fetch(
                `https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=${txHash}&apikey=${etherscanKey}`
              );
              const data = await response.json();
              if (data.result) {
                blockchainContext += `\n\nTransaction ${txHash}:\n- From: ${data.result.from}\n- To: ${data.result.to}\n- Value: ${(parseInt(data.result.value || '0', 16) / 1e18).toFixed(4)} ETH`;
              }
            } catch (error) {
              console.error('Etherscan API error:', error);
            }
          }
        }
      }

      const enhancedMessage = blockchainContext 
        ? `${userMessage}\n\n[Blockchain Data Context:${blockchainContext}]`
        : userMessage;

      // Call OpenAI API
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages.map(msg => ({ role: msg.role, content: msg.content })),
            { role: 'user', content: enhancedMessage }
          ],
          temperature: 0.7,
          max_tokens: 1000,
          stream: true
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `API error: ${response.status}`);
      }

      // Handle streaming response
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';

      if (reader) {
        // Add empty assistant message that we'll update
        setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split('\n').filter(line => line.trim() !== '');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);
              if (data === '[DONE]') continue;

              try {
                const parsed = JSON.parse(data);
                const content = parsed.choices?.[0]?.delta?.content;
                
                if (content) {
                  assistantMessage += content;
                  setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1] = {
                      role: 'assistant',
                      content: assistantMessage
                    };
                    return newMessages;
                  });
                }
              } catch (e) {
                console.error('Error parsing SSE:', e);
              }
            }
          }
        }
      }

    } catch (error) {
      console.error('Chat error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to get AI response. Please try again.",
        variant: "destructive"
      });
      
      // Remove the user message on error
      setMessages(prev => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-law-blue hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          Chat with AI Expert
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[90vw] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Chat with AI Legal Expert</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col h-[calc(100vh-120px)] mt-4">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg whitespace-pre-wrap ${
                  message.role === 'assistant'
                    ? 'bg-muted mr-12'
                    : 'bg-law-blue text-white ml-12'
                }`}
              >
                {message.content}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Analyzing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about blockchain law, smart contracts, regulations..."
              disabled={isLoading}
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-law-blue disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <Button type="submit" disabled={isLoading || !input.trim()}>
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Send'}
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AiChatButton;