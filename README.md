# Digital Twin Workshop - Clean Architecture

## 🎯 Project Purpose
**Primary**: MCP Server for GitHub Copilot integration
**Secondary**: Web UI for testing and demonstration

## 📁 Clean Project Structure

```
digital-twin-workshop/
├── 📂 digital-twin/           # Main MCP server application
│   ├── 🚀 mcp-server.mjs     # Core MCP server (MAIN ENTRY POINT)
│   ├── 📦 package.json       # Dependencies & scripts
│   ├── 🔐 .env.local         # Environment variables
│   ├── 📖 MCP_USAGE.md       # MCP server documentation
│   ├── 📂 app/               # Optional web UI for testing
│   └── 📂 lib/               # Shared utilities
├── 📂 data/                  # Profile data (shared)
│   └── 📄 digitaltwin.json   # Cristina's professional profile
├── 📂 utils/                 # Additional utilities
│   └── 🐍 digitaltwin_rag.py # Standalone Python version
└── 📄 README.md              # Project overview
```

## ⚡ Quick Commands

```bash
# Primary usage - Start MCP server
cd digital-twin && pnpm run mcp

# Testing - Web interface 
cd digital-twin && pnpm run ui

# Development - Install dependencies
cd digital-twin && pnpm install
```

## 🧹 Cleaned Up

**Removed unnecessary files:**
- ❌ `test-*.js` files (5 test files removed)
- ❌ `/app/test` directory (redundant test UI)
- ❌ Redundant scripts from package.json
- ❌ Moved standalone Python script to utils/

**Focused structure on:**
- ✅ MCP Server as primary functionality
- ✅ Clean separation of concerns
- ✅ Optional web UI for development/testing
- ✅ Clear documentation and usage guides

This structure prioritizes the MCP server while keeping the web UI available for testing and development purposes.