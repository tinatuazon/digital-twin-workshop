# MCP Server Usage Guide

## 🎯 Primary Purpose: MCP Server

This project provides Cristina's Digital Twin as an **MCP (Model Context Protocol) Server** for GitHub Copilot integration.

## 🚀 Quick Start

```bash
# Start the MCP server
pnpm run mcp

# The server will run on stdio and be ready for MCP client connections
```

## 📋 MCP Server Configuration

### For GitHub Copilot Integration:

Add to your MCP configuration file (typically in VS Code settings):

```json
{
  "mcpServers": {
    "cristina-digital-twin": {
      "command": "node", 
      "args": ["mcp-server.mjs"],
      "cwd": "/path/to/digital-twin-workshop/digital-twin",
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
}
```

### Available Tool:

- **`digital-twin-query`**: Ask questions about Cristina's professional profile
  - Input: `question` (string) - Your question about her background, skills, experience
  - Output: AI-generated response based on her profile data

## 🔧 Development & Testing

### Test with Web UI (Optional):
```bash
pnpm run ui    # Starts Next.js interface at http://localhost:3000
```

### Environment Setup:
Ensure your `.env.local` file contains:
```
GROQ_API_KEY=your_groq_api_key
UPSTASH_VECTOR_REST_URL=your_upstash_url
UPSTASH_VECTOR_REST_TOKEN=your_upstash_token
```

## 📊 Profile Data Coverage

The MCP server provides AI-powered access to:
- **Professional Experience**: Freelance development work, projects
- **Technical Skills**: PHP/Laravel, Python, JavaScript, databases
- **Projects Portfolio**: Web applications, thesis project, client work  
- **Career Goals**: Short/long-term objectives, learning focus
- **Education**: University background, certifications

## 🎛️ How It Works

1. **RAG Pipeline**: Combines vector search (Upstash) with LLM generation (Groq)
2. **Profile Data**: Structured JSON containing Cristina's professional information
3. **MCP Protocol**: Provides seamless integration with AI development tools
4. **Fallback Mode**: Direct JSON search if vector database unavailable

This server enables natural language queries about Cristina's professional background through any MCP-compatible client.