import { useState, useEffect, useRef } from 'react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { LoadingIndicator } from './components/LoadingIndicator';
import { sendMessage } from './services/api';
import { Message } from './types';
import { Tent, AlertCircle } from 'lucide-react';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isWakingUp, setIsWakingUp] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    // Missatge de benvinguda
    const welcomeMessage: Message = {
      id: 'welcome',
      text: 'Hola! Soc el teu assistent de Park4Night. Puc ajudar-te a trobar llocs per aparcar o acampar. Què busques?',
      sender: 'agent',
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, []);

  const handleSendMessage = async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);
    setIsWakingUp(false);

    // Timer per mostrar missatge de "despertant" després de 3 segons
    const wakeUpTimer = setTimeout(() => {
      setIsWakingUp(true);
    }, 3000);

    try {
      const response = await sendMessage(text);

      clearTimeout(wakeUpTimer);
      setIsWakingUp(false);

      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'agent',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, agentMessage]);
    } catch (err) {
      clearTimeout(wakeUpTimer);
      setIsWakingUp(false);

      const errorMessage = err instanceof Error ? err.message : 'Error desconegut';
      setError(errorMessage);

      const errorAgentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `Ho sento, hi ha hagut un error: ${errorMessage}`,
        sender: 'agent',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorAgentMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <Tent className="w-8 h-8" />
          <div>
            <h1 className="text-xl font-bold">Park4Night Agent</h1>
            <p className="text-sm text-blue-100">El teu assistent de càmpings i aparcaments</p>
          </div>
        </div>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto">
          {messages.map(message => (
            <ChatMessage key={message.id} message={message} />
          ))}

          {isLoading && (
            <>
              <LoadingIndicator />
              {isWakingUp && (
                <div className="flex items-center gap-2 text-sm text-gray-500 ml-11 mb-4">
                  <AlertCircle className="w-4 h-4" />
                  <span>Despertant l'agent, un moment...</span>
                </div>
              )}
            </>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4 flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
    </div>
  );
}

export default App;
