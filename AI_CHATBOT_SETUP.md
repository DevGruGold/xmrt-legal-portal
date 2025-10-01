# AI Chatbot Setup Instructions

## Overview
The AI chatbot is now integrated with OpenAI API and blockchain data providers (Etherscan, Polyscan). It provides real-time legal expertise for blockchain matters with live blockchain data analysis.

## Required Environment Variables

Create a `.env` file in your project root with the following variables:

```env
# Required - OpenAI API Key
VITE_OPENAI_API_KEY=sk-proj-your-openai-api-key-here

# Optional - Blockchain API Keys (for enhanced features)
VITE_ETHERSCAN_API_KEY=your-etherscan-api-key
VITE_POLYSCAN_API_KEY=your-polygonscan-api-key
```

## Getting API Keys

### 1. OpenAI API Key (Required)
- Visit: https://platform.openai.com/api-keys
- Sign up or log in to your OpenAI account
- Click "Create new secret key"
- Copy the key and add it to your `.env` file

### 2. Etherscan API Key (Optional)
- Visit: https://etherscan.io/apis
- Sign up for a free account
- Navigate to API Keys section
- Create a new API key
- Add it to your `.env` file

### 3. PolygonScan API Key (Optional)
- Visit: https://polygonscan.com/apis
- Sign up for a free account
- Navigate to API Keys section
- Create a new API key
- Add it to your `.env` file

## Features

### Blockchain Legal Expertise
- Smart contract analysis and legal auditing
- Cryptocurrency regulatory compliance
- NFT and DeFi legal guidance
- Cross-chain transaction analysis
- DAO governance legal structures

### Blockchain Data Integration
When users mention Ethereum addresses or transaction hashes, the chatbot automatically:
- Fetches account balances from Etherscan
- Retrieves transaction details
- Provides legal context based on real blockchain data

### Example Queries
- "Analyze this smart contract address: 0x..."
- "What are the legal implications of this transaction: 0x..."
- "What regulations apply to NFT sales in Costa Rica?"
- "Help me understand DeFi legal compliance"

## Security Note

⚠️ **Important**: This is a frontend-only implementation. API keys are exposed in the browser, which is suitable for:
- Development and testing
- Internal tools
- Low-stakes applications

For production applications with sensitive data:
- Consider implementing a backend proxy
- Use rate limiting
- Implement proper key rotation
- Monitor API usage

## Technical Details

- **Model**: GPT-4o-mini (cost-effective, fast)
- **Streaming**: Real-time response streaming for better UX
- **Auto-scroll**: Messages automatically scroll to bottom
- **Error handling**: User-friendly error messages with toast notifications
- **Blockchain detection**: Automatically detects and analyzes addresses/hashes in messages

## Troubleshooting

### "OpenAI API key not configured" error
- Ensure your `.env` file exists in the project root
- Verify the key starts with `VITE_` prefix
- Restart your development server after adding the `.env` file

### Blockchain data not appearing
- Ensure Etherscan/Polyscan API keys are properly configured
- Check that addresses/hashes are properly formatted
- Verify API keys have proper permissions

### Rate limiting issues
- OpenAI: Check your usage limits at https://platform.openai.com/usage
- Etherscan/Polyscan: Free tier has rate limits (5 requests/second)
- Consider upgrading API plans for production use
