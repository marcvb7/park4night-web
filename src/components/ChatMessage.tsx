import { Message } from '../types';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isAgent = message.sender === 'agent';

  return (
    <div className={`flex gap-3 mb-4 ${isAgent ? 'justify-start' : 'justify-end'}`}>
      {isAgent && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <Bot className="w-5 h-5 text-gray-600" />
        </div>
      )}

      <div
        className={`max-w-[75%] md:max-w-[60%] rounded-2xl px-4 py-2 ${
          isAgent
            ? 'bg-gray-100 text-gray-900'
            : 'bg-blue-500 text-white'
        }`}
      >
        <p className="text-sm md:text-base whitespace-pre-wrap break-words">
          {message.text}
        </p>
        <span className={`text-xs mt-1 block ${isAgent ? 'text-gray-500' : 'text-blue-100'}`}>
          {message.timestamp.toLocaleTimeString('ca-ES', {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </span>
      </div>

      {!isAgent && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
};
