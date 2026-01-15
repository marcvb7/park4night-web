import { Loader2 } from 'lucide-react';

export const LoadingIndicator = () => {
  return (
    <div className="flex gap-3 mb-4 justify-start">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
        <Loader2 className="w-5 h-5 text-gray-600 animate-spin" />
      </div>
      <div className="max-w-[75%] md:max-w-[60%] rounded-2xl px-4 py-3 bg-gray-100">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};
