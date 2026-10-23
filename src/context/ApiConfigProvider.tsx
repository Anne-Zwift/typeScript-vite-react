import type { ReactNode } from 'react';
import type { ApiConfig } from '../types/cabin';
import { ApiConfigContext } from './ApiConfigContext';

interface ApiConfigProviderProps {
  children: ReactNode;
}

export function ApiConfigProvider({ children }: ApiConfigProviderProps) {
  const configValue: ApiConfig = {
    baseUrl: 'https://my-mock-api.com',
  };

  return (
    <ApiConfigContext.Provider value={configValue}>
      {children}
    </ApiConfigContext.Provider>
  );
}
