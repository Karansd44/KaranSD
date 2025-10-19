"use client";
import { useState, useEffect } from 'react';
import { Chatbot as ReactChatbot } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import { assets } from '../../../assets/assets';
import { personalInfo, chatbotMessages } from '../../../assets/chatbot-data';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

const Chatbot = ({ isDarkMode }) => {
  const [showChat, setShowChat] = useState(false);
  const [isChatbotReady, setIsChatbotReady] = useState(false);

  // Use useEffect to handle client-side rendering
  useEffect(() => {
    setIsChatbotReady(true);
  }, []);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {showChat && isChatbotReady && (
        <div 
          className={`mb-4 shadow-2xl rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
            isDarkMode 
              ? 'border-gray-700 bg-gray-900' 
              : 'border-gray-200 bg-white'
          }`} 
          style={{ width: '380px', height: '550px' }}
        >
          <ReactChatbot
            config={config(isDarkMode)}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
      <button
        onClick={toggleChat}
        className={`flex justify-center items-center w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          isDarkMode
            ? 'bg-gradient-to-br from-blue-600 to-purple-700 text-white hover:from-blue-500 hover:to-purple-600'
            : 'bg-gradient-to-br from-blue-500 to-purple-600 text-white hover:from-blue-400 hover:to-purple-500'
        }`}
        aria-label="Toggle Chat"
      >
        {showChat ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Chatbot;