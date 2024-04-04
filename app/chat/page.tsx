'use client'

import { useChat } from "ai/react"
import ChatBubble from '../components/ChatBubble';


export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    return (
      <div className="flex flex-col w-full max-w-xs sm:max-w-l lg:max-w-2xl py-15 mx-auto stretch justify-center pb-20">
        <h4 className="text-lg font-bold md:text-xl lg:text-4xl pb-4 text-white'">
          Recipes Here
        </h4>
        {messages.map((m) => (
          <ChatBubble
            key={m.id}
            role={m.role === 'user' ? 'Me' : 'Chef'}
            content={m.content}
          />
        ))}

  
        <form onSubmit={handleSubmit}>
          <input
            className="fixed bottom-0 w-full max-w-xs sm:max-w-l lg:max-w-2xl p-2 mb-8 border border-gray-300 rounded shadow-xl text-black text-lg lg:text-xl"
            value={input}
            placeholder="Type ingredients and portion number to get started"
            onChange={handleInputChange}
          />
        </form>
      </div>
    );
  }
