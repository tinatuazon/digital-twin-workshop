"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Send, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PortfolioHeader } from "@/components/portfolio-header";
import { AnimatedSection } from "@/components/animated-section";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function ChatPage() {
    // Always scroll to top on mount
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, []);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Cristina's AI digital twin. Ask me anything about her professional background, skills, experience, or projects!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Remove auto-scroll to bottom after sending a message

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: userMessage.content,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        role: "assistant",
        content: data.response || "I apologize, but I couldn't process your question right now.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, I'm having trouble connecting right now. Please try again later.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background dark:bg-[#18181b] text-foreground">
      {/* Solid background - matching home page */}
      <div className="fixed inset-0 bg-background dark:bg-[#18181b] z-0"></div>

      {/* Header */}
      <PortfolioHeader />

      <div className="relative z-10 container mx-auto p-3 sm:p-4 pt-20 sm:pt-24 pb-6 sm:pb-8">
        {/* Chat Header */}
        <AnimatedSection animation="fade-up">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors group">
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                <span>Back to Portfolio</span>
              </Link>
            </div>
            
            <div className="flex items-center mb-2">
              <div className="flex items-center mr-3">
                <MessageCircle className="w-6 h-6 mr-2 text-primary" />
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              </div>
              <h1 className="text-2xl font-bold">Chat with Cristina's AI Twin</h1>
            </div>
            <p className="text-muted-foreground">Ask me anything about Cristina's professional background, skills, experience, or projects!</p>
          </div>
        </AnimatedSection>

        {/* Chat Interface */}
        <AnimatedSection animation="fade-up" delay={100}>
          <Card className="bg-card/70 border-border backdrop-blur-sm h-[calc(100vh-280px)] flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-border flex-shrink-0">
              <CardTitle className="text-lg flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-primary" />
                AI Digital Twin
              </CardTitle>
              <div className="text-sm text-muted-foreground">
                {messages.length} message{messages.length !== 1 ? 's' : ''}
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0 min-h-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-lg ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground border border-border"
                      }`}
                    >
                      <p className="whitespace-pre-wrap text-sm">{message.content}</p>
                      <div className={`text-xs mt-2 ${
                        message.role === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}>
                        {message.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted border border-border px-4 py-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Invisible div to scroll to */}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Form */}
              <div className="p-4 border-t border-border flex-shrink-0">
                <form onSubmit={sendMessage} className="mb-3">
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask about Cristina's experience, skills, projects..."
                      className="flex-1 bg-background border-border text-foreground placeholder-muted-foreground"
                      disabled={isLoading}
                    />
                    <Button
                      type="submit"
                      disabled={isLoading || !input.trim()}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </form>

                {/* Suggested Questions */}
                <div className="space-y-2">
                  <p className="text-muted-foreground text-sm">Suggested questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "What is your experience with Laravel?",
                      "Tell me about your thesis project",
                      "What are your career goals?",
                      "Describe your technical skills",
                      "What projects have you worked on?"
                    ].map((suggestion, index) => (
                      <Button
                        key={index}
                        onClick={() => setInput(suggestion)}
                        variant="outline"
                        size="sm"
                        className="text-xs h-7 bg-secondary/50 border-border text-secondary-foreground hover:bg-secondary"
                        disabled={isLoading}
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection
          animation="fade-in"
          delay={200}
          className="mt-8 sm:mt-12 py-4 sm:py-6 text-center text-xs sm:text-sm text-muted-foreground"
        >
          <p>© {new Date().getFullYear()} Cristina Tuazon. All rights reserved.</p>
        </AnimatedSection>
      </div>
    </main>
  );
}