"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { DashboardHeader } from '@/components/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Send, Bot, User as UserIcon } from 'lucide-react';
import { materialsData } from '@/lib/materials-data';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ChatPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hey there! 👋 I\'m here to help you find exactly what you need for your factory. Whether you\'re looking for metals, oils, polymers, or chemicals, just tell me what you\'re after and I\'ll guide you to the best options. What brings you here today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationContext, setConversationContext] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Track conversation context
    setConversationContext(prev => [...prev, lowerMessage].slice(-3));
    
    // Greetings - varied responses
    const greetings = ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'];
    if (greetings.some(g => lowerMessage === g || lowerMessage.startsWith(g + ' '))) {
      const responses = [
        'Hi! Great to see you here! What can I help you find today?',
        'Hello! Ready to help you source the perfect materials. What are you working on?',
        'Hey! How can I assist you with your procurement needs today?',
        'Hi there! Looking for something specific, or should I show you what\'s popular right now?'
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    // Thanks/appreciation
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      const responses = [
        'You\'re welcome! Happy to help. Is there anything else you\'d like to know?',
        'My pleasure! Let me know if you need anything else.',
        'Glad I could help! Feel free to ask if you have more questions.',
        'Anytime! That\'s what I\'m here for. Anything else on your mind?'
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    // Price-based recommendations with personality
    if (lowerMessage.includes('cheap') || lowerMessage.includes('low price') || lowerMessage.includes('budget') || lowerMessage.includes('affordable')) {
      const cheapMaterials = materialsData.filter(m => m.basePrice < 100).slice(0, 5);
      const intros = [
        'I totally understand budget constraints! Here are some great value options:',
        'Smart choice looking for affordable materials. Check these out:',
        'Looking to keep costs down? These materials offer excellent value:',
        'Got you covered with budget-friendly options:'
      ];
      return `${intros[Math.floor(Math.random() * intros.length)]}\n\n${cheapMaterials.map(m => 
        `• ${m.name} (${m.category}) - ₹${m.currentPrice.toFixed(2)} per ${m.unit}\n  ${m.commonUse}\n  📍 ${m.location} | Quality: ${m.quality}`
      ).join('\n\n')}\n\nAll of these are solid picks for the price. Want me to dive deeper into any of them?`;
    }

    // Expensive/premium materials
    if (lowerMessage.includes('expensive') || lowerMessage.includes('premium') || lowerMessage.includes('high price') || lowerMessage.includes('best')) {
      const expensiveMaterials = materialsData.filter(m => m.basePrice > 500).slice(0, 5);
      const intros = [
        'Looking for top-tier materials? Here\'s the premium selection:',
        'You want the best? These are our high-end options:',
        'For premium quality, check out these materials:',
        'Going for the gold standard? Here are your options:'
      ];
      return `${intros[Math.floor(Math.random() * intros.length)]}\n\n${expensiveMaterials.map(m => 
        `• ${m.name} (${m.category}) - ₹${m.currentPrice.toFixed(2)} per ${m.unit}\n  ${m.commonUse}\n  📍 ${m.location} | Quality: ${m.quality}`
      ).join('\n\n')}\n\nThese materials come with superior quality and performance. Worth every rupee if you need reliability!`;
    }

    // Category-based with varied intros
    if (lowerMessage.includes('metal')) {
      const metals = materialsData.filter(m => m.category === 'Metals').slice(0, 5);
      const intros = [
        'Metals are my specialty! Here\'s what we have in stock:',
        'Great choice - metals are always in demand. Check these out:',
        'Looking for metals? I\'ve got some excellent options:',
        'Let me show you our metal inventory:'
      ];
      return `${intros[Math.floor(Math.random() * intros.length)]}\n\n${metals.map(m => 
        `• ${m.name} - ₹${m.currentPrice.toFixed(2)} per ${m.unit}\n  ${m.commonUse}\n  📍 ${m.location} | Quality: ${m.quality}`
      ).join('\n\n')}\n\nThese prices update every 5 seconds, so you\'re seeing live market rates. Which one catches your eye?`;
    }

    if (lowerMessage.includes('oil') || lowerMessage.includes('lubricant') || lowerMessage.includes('grease')) {
      const oils = materialsData.filter(m => m.category === 'Oils').slice(0, 5);
      const intros = [
        'Oils and lubricants - essential for smooth operations! Here\'s what I recommend:',
        'Perfect for keeping your machinery running smoothly:',
        'Let me show you our oil selection:',
        'For lubrication needs, these are your best bets:'
      ];
      return `${intros[Math.floor(Math.random() * intros.length)]}\n\n${oils.map(m => 
        `• ${m.name} - ₹${m.currentPrice.toFixed(2)} per ${m.unit}\n  ${m.commonUse}\n  📍 ${m.location}`
      ).join('\n\n')}\n\nEach has specific applications - need help matching one to your equipment?`;
    }

    if (lowerMessage.includes('polymer') || lowerMessage.includes('plastic')) {
      const polymers = materialsData.filter(m => m.category === 'Polymers').slice(0, 5);
      const intros = [
        'Polymers are incredibly versatile! Here are some popular ones:',
        'Looking for plastics and polymers? Great selection here:',
        'Polymer materials coming right up:',
        'Here\'s what we have in our polymer range:'
      ];
      return `${intros[Math.floor(Math.random() * intros.length)]}\n\n${polymers.map(m => 
        `• ${m.name} - ₹${m.currentPrice.toFixed(2)} per ${m.unit}\n  ${m.commonUse}\n  Quality: ${m.quality}`
      ).join('\n\n')}\n\nDifferent polymers have different properties. What\'s your intended application?`;
    }

    if (lowerMessage.includes('chemical')) {
      const chemicals = materialsData.filter(m => m.category === 'Chemicals').slice(0, 5);
      const intros = [
        'Chemicals require careful selection. Here\'s what we stock:',
        'Let me show you our chemical inventory:',
        'For chemical supplies, these are available:',
        'Here are the chemicals we currently have:'
      ];
      return `${intros[Math.floor(Math.random() * intros.length)]}\n\n${chemicals.map(m => 
        `• ${m.name} - ₹${m.currentPrice.toFixed(2)} per ${m.unit}\n  ${m.commonUse}\n  📍 ${m.location}`
      ).join('\n\n')}\n\nRemember to check safety data sheets for handling requirements. Need more details on any of these?`;
    }

    // Quality-based with context
    if (lowerMessage.includes('high quality') || lowerMessage.includes('best quality')) {
      const highQuality = materialsData.filter(m => m.quality === 'High').slice(0, 5);
      return `Quality matters! Here are our premium-grade materials:\n\n${highQuality.map(m => 
        `• ${m.name} (${m.category}) - ₹${m.currentPrice.toFixed(2)} per ${m.unit}\n  ${m.commonUse}\n  📍 ${m.location}`
      ).join('\n\n')}\n\nAll rated as high quality - these meet strict industry standards and will give you consistent, reliable performance. Perfect for critical applications!`;
    }

    // Location-based with local flair
    const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Pune', 'Kolkata', 'Hyderabad'];
    for (const city of cities) {
      if (lowerMessage.includes(city.toLowerCase())) {
        const cityMaterials = materialsData.filter(m => m.location === city).slice(0, 5);
        const cityComments: {[key: string]: string} = {
          'Mumbai': 'Great port city for international materials!',
          'Delhi': 'The capital has extensive distribution networks!',
          'Bangalore': 'Tech hub with excellent logistics!',
          'Chennai': 'Strong industrial presence in the south!',
          'Pune': 'Manufacturing powerhouse!',
          'Kolkata': 'Eastern gateway with great connectivity!',
          'Hyderabad': 'Growing industrial center!'
        };
        return `${cityComments[city]} Here\'s what\'s available in ${city}:\n\n${cityMaterials.map(m => 
          `• ${m.name} (${m.category}) - ₹${m.currentPrice.toFixed(2)} per ${m.unit}\n  ${m.commonUse}\n  Quality: ${m.quality}`
        ).join('\n\n')}\n\nLocal sourcing means faster delivery and lower transport costs. Interested in any of these?`;
      }
    }

    // Help/confused users
    if (lowerMessage.includes('help') || lowerMessage.includes('what can you') || lowerMessage.includes('how do')) {
      return `I\'m here to make your procurement easier! Here\'s what I can do:\n\n🔍 **Find Materials** - Tell me what you need\n💰 **Price Guidance** - Show you budget or premium options\n📍 **Location** - Find materials near you (Mumbai, Delhi, Bangalore, etc.)\n⭐ **Quality** - Filter by quality grades\n📊 **Compare** - Help you choose between options\n\nJust chat naturally! Ask things like:\n• "Show me affordable metals"\n• "What\'s available in Mumbai?"\n• "I need high-quality polymers"\n• "What\'s good for lubrication?"\n\nWhat would you like to start with?`;
    }

    // Specific material requests
    const materialNames = materialsData.map(m => m.name.toLowerCase());
    for (const material of materialsData) {
      if (lowerMessage.includes(material.name.toLowerCase())) {
        return `Great choice! Here\'s the info on ${material.name}:\n\n💰 **Current Price:** ₹${material.currentPrice.toFixed(2)} per ${material.unit}\n📦 **Category:** ${material.category}\n🔧 **Common Use:** ${material.commonUse}\n📍 **Location:** ${material.location}\n⭐ **Quality:** ${material.quality}\n✅ **Availability:** ${material.availability ? 'In Stock' : 'Limited Stock'}\n\nPrices update every 5 seconds based on market conditions. Want to see similar materials, or need help with something else?`;
      }
    }

    // Confused/unclear requests
    const vagueTerms = ['something', 'anything', 'stuff', 'things', 'i don\'t know'];
    if (vagueTerms.some(term => lowerMessage.includes(term))) {
      return `No worries! Let me help you narrow it down. Could you tell me:\n\n• What industry or application? (manufacturing, construction, etc.)\n• Any budget constraints?\n• Preferred location for sourcing?\n\nOr if you\'d like, I can show you:\n1. Our most popular materials\n2. Today\'s best deals\n3. Materials by category\n\nWhat sounds good?`;
    }

    // Default - more helpful and engaging
    const encouragements = [
      'Hmm, I want to make sure I understand exactly what you need. Could you tell me more?',
      'I\'m not quite catching what you\'re looking for. Are you interested in a specific category like metals, oils, polymers, or chemicals?',
      'Let me help you better! Are you looking for materials based on price, location, quality, or a specific type?',
      'I want to find the perfect match for you! Could you be more specific about what you need?'
    ];
    
    return `${encouragements[Math.floor(Math.random() * encouragements.length)]}\n\n💡 **Quick Tips:**\n• Mention a category: "metals", "oils", "polymers", "chemicals"\n• Set a budget: "cheap", "affordable", "premium"\n• Name a city: "Mumbai", "Delhi", "Bangalore"\n• Specify quality: "high quality", "best quality"\n\nWhat would you like to explore?`;
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateAIResponse(inputValue),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" onClick={() => router.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-4xl font-bold text-white">AI Material Assistant</h1>
        </div>

        <Card className="bg-slate-800 border-slate-700 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Bot className="w-6 h-6 text-blue-400" />
              Chat with AI Assistant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 h-[500px] overflow-y-auto mb-4 pr-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] rounded-lg p-4 ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-700 text-slate-100'
                    }`}
                  >
                    <p className="whitespace-pre-line text-sm">{message.content}</p>
                    <p className="text-xs mt-2 opacity-60">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                  {message.role === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center flex-shrink-0">
                      <UserIcon className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me about materials, prices, or recommendations..."
                className="bg-slate-700 border-slate-600 text-white"
              />
              <Button onClick={handleSend} className="bg-blue-600 hover:bg-blue-700">
                <Send className="w-4 h-4" />
              </Button>
            </div>

            <div className="mt-4 p-3 bg-slate-700/50 rounded-lg">
              <p className="text-xs text-slate-400 text-center">
                💡 Try asking: "Show me cheap metals", "Best quality polymers", "Materials in Mumbai"
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}