export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

export interface ChatResponse {
  response: string;
  timestamp: string;
}
