'use client';

import { useState } from 'react';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Aquí iría la lógica para enviar el mensaje al chat
      console.log('Mensaje enviado:', message);
      setMessage('');
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChat}
          className="btn btn-primary btn-circle btn-lg shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Abrir chat en vivo"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-base-100 rounded-lg shadow-2xl border border-base-300 z-40 flex flex-col">
          {/* Chat Header */}
          <div className="bg-primary text-primary-content p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Chat en Vivo</h3>
                <p className="text-sm opacity-90">Estamos aquí para ayudarte</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-xs">En línea</span>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-8 rounded-full bg-primary text-primary-content flex items-center justify-center text-xs">
                    SX
                  </div>
                </div>
                <div className="chat-bubble chat-bubble-primary">
                  ¡Hola! 👋 Soy el asistente de StartX369. ¿En qué puedo ayudarte hoy?
                </div>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-base-300">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="input input-bordered input-sm flex-1"
              />
              <button
                type="submit"
                className="btn btn-primary btn-sm"
                disabled={!message.trim()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={toggleChat}
        />
      )}
    </>
  );
} 