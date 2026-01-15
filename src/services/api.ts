import axios from 'axios';
import { ChatResponse } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const sendMessage = async (message: string): Promise<string> => {
  try {
    const response = await axios.post<ChatResponse>(`${API_URL}/api/chat`, {
      message,
    }, {
      timeout: 60000, // 60 segons per si l'API està hibernant
    });

    return response.data.response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        throw new Error('La connexió ha trigat massa. Si us plau, torna-ho a provar.');
      }
      if (error.response?.status === 500) {
        throw new Error('Error del servidor. Si us plau, torna-ho a provar.');
      }
      if (!error.response) {
        throw new Error("No s'ha pogut connectar amb el servidor.");
      }
    }
    throw new Error('Error enviant el missatge. Si us plau, torna-ho a provar.');
  }
};

export const checkHealth = async (): Promise<boolean> => {
  try {
    const response = await axios.get(`${API_URL}/health`, { timeout: 5000 });
    return response.data.status === 'ok';
  } catch {
    return false;
  }
};
