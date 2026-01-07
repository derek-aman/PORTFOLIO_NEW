import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, RotateCcw, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! Ask me anything about my portfolio.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isPolishing, setIsPolishing] = useState(false);
  // Default suggestions to get the user started
  const [suggestions, setSuggestions] = useState(['Skills', 'Projects', 'Contact Info']);
  
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(scrollToBottom, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const refreshChat = () => {
    setMessages([
      { role: 'assistant', content: 'Hi! Ask me anything about my portfolio.' }
    ]);
    setSuggestions(['Skills', 'Projects', 'Contact Info']);
  };

  // Feature 1: ✨ Magic Polish
  // Calls a specialized API endpoint to rewrite the user's input
  const polishInput = async () => {
    if (!input.trim()) return;
    setIsPolishing(true);
    try {
      const response = await fetch('https://portfolio-backend-bnuf.onrender.com/api/polish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input }),
      });
      const data = await response.json();
      if (data.polished) setInput(data.polished);
    } catch (error) {
      console.error("Failed to polish:", error);
    } finally {
      setIsPolishing(false);
    }
  };

  const sendMessage = async (textToSend = input) => {
    if (!textToSend.trim()) return;

    const userMessage = { role: 'user', content: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    // Hide suggestions while loading
    setSuggestions([]);

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Send history so the bot knows context
        body: JSON.stringify({ message: textToSend, history: messages }),
      });

      const data = await response.json();
      
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
      
      // Feature 2: 💡 Smart Suggestions
      // The backend now returns a list of suggested follow-up questions
      if (data.suggestions && Array.isArray(data.suggestions)) {
        setSuggestions(data.suggestions);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Error connecting to server.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end font-sans">
      
      
      <div 
        className={`
          transition-all duration-300 ease-in-out transform origin-bottom-right
          ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}
          bg-white w-96 h-[490px] max-h-[80vh] rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden mb-4
        `}
      >
        
        <div className="bg-[#07aeba] p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <h3 className="font-semibold text-sm">AI Assistant</h3>
          </div>
          
          <div className="flex items-center gap-1">
            <button 
              onClick={refreshChat} 
              className="hover:bg-white/20 p-1.5 rounded transition-colors" 
              title="Reset Chat"
            >
              <RotateCcw size={16} />
            </button>
            <button onClick={toggleChat} className="hover:bg-white/20 p-1.5 rounded transition-colors">
              <X size={18} />
            </button>
          </div>
        </div>

        
        <div 
          className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3 overscroll-contain"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {messages.map((msg, index) => (
            <div key={index} className={`max-w-[85%] px-4 py-2 text-sm shadow-sm ${msg.role === 'user' ? 'self-end bg-[#07aeba] text-white rounded-2xl rounded-tr-none' : 'self-start bg-white text-gray-800 border border-gray-100 rounded-2xl rounded-tl-none'}`}>
               <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
          ))}
          {loading && <div className="self-start bg-gray-200 text-gray-500 rounded-2xl rounded-tl-none px-4 py-2 text-xs animate-pulse">Typing...</div>}
          <div ref={messagesEndRef} />
        </div>

        {/* 💡 Suggestions Chips */}
        {suggestions.length > 0 && !loading && (
          <div className="px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-hide">
            {suggestions.map((suggestion, idx) => (
              <button 
                key={idx}
                onClick={() => sendMessage(suggestion)}
                className="whitespace-nowrap bg-gray-100 hover:bg-gray-200 text-[#07aeba] text-xs px-3 py-1 rounded-full border border-gray-200 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        
        <div className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center">
          
          
          <div className="flex-1 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask me anything..."
              className="w-full text-sm border border-gray-300 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#07aeba]"
            />
            
            <button 
              onClick={polishInput}
              disabled={!input.trim() || isPolishing}
              className={`absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full transition-colors ${isPolishing ? 'text-gray-400' : 'text-yellow-500 hover:bg-yellow-50'}`}
              title="Polish with AI"
            >
              <Sparkles size={16} className={isPolishing ? 'animate-spin' : ''} />
            </button>
          </div>

          <button onClick={() => sendMessage()} disabled={!input.trim()} className="bg-[#07aeba] text-white p-2 rounded-full hover:bg-[#00c1cc] transition-colors disabled:opacity-50">
            <Send size={18} />
          </button>
        </div>
      </div>

      
      <button 
        onClick={toggleChat}
        className={`
          flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110
          ${isOpen ? 'bg-black rotate-90' : 'bg-[#00c1cc]'}
          text-white
        `}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default ChatWidget;