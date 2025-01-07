import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const AiChatButton = () => {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your AI legal expert. How can I assist you with blockchain law, smart contracts, or other legal matters today?'
    }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    
    // Simulate AI response (in a real implementation, this would call an AI API)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Thank you for your message. One of our legal experts will review your query and get back to you shortly. For immediate assistance, please contact us via WhatsApp or email.'
      }]);
    }, 1000);
    
    setInput('');
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
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  message.role === 'assistant'
                    ? 'bg-gray-100 mr-12'
                    : 'bg-law-blue text-white ml-12'
                }`}
              >
                {message.content}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-law-blue"
            />
            <Button type="submit">Send</Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AiChatButton;