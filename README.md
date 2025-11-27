# Digital Twin Workshop - Clean Architecture

## 🎯 Project Overview
**Professional Profile Showcase + Interactive AI Chatbot + MCP Server**

This project demonstrates a complete AI-powered digital twin system with:
- **Web App**: Beautiful profile showcase with interactive chatbot
- **MCP Server**: Standalone server for GitHub Copilot integration
- **RAG Pipeline**: AI-powered responses about professional background

## 📁 Project Structure

```
digital-twin-workshop/
├── 🌐 digital-twin/          # Main web application
│   ├── app/
│   │   ├── page.tsx          # Profile showcase homepage
│   │   ├── chat/             # Interactive chatbot interface
│   │   └── api/              # API endpoints
│   └── package.json          # Web app dependencies
├── 🤖 mcp-server/            # Standalone MCP server
│   ├── server.mjs           # MCP server for GitHub Copilot
│   ├── package.json         # Server-only dependencies  
│   └── .env                 # Server environment
├── 📊 data/                 # Professional profile data
│   └── digitaltwin.json     # Structured profile information
└── 🛠️ utils/               # Additional utilities
    └── digitaltwin_rag.py   # Standalone Python RAG script
```

## 🚀 Quick Start

### **Web App (Profile + Chatbot):**
```bash
cd digital-twin
pnpm install && pnpm run dev
# Visit: http://localhost:3000
```

### **MCP Server (GitHub Copilot):**
```bash
cd mcp-server
npm install && npm start
# Ready for MCP client connections
```

## 🌐 Live Demo

**Web App**: [https://digital-twin-workshop-two.vercel.app/](https://digital-twin-workshop-two.vercel.app/)

## 💡 Features

- ✨ **Professional Profile Showcase** - Skills, experience, projects
- 💬 **Interactive AI Chatbot** - Ask questions about background
- 🤖 **MCP Server Integration** - GitHub Copilot compatibility
- 📱 **Responsive Design** - Works on all devices
- ⚡ **Fast AI Responses** - Groq LLM + Upstash Vector DB

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, TailwindCSS, TypeScript
- **Backend**: Node.js, MCP Protocol, REST APIs
- **AI**: Groq API, Upstash Vector, RAG Pipeline
- **Deployment**: Vercel (Web), Standalone (MCP)

This architecture provides the perfect foundation for showcasing professional expertise through an interactive AI-powered experience.