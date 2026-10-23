import { createContext, useContext } from 'react';
import type { ApiConfig } from '../types/cabin';

// Create context with a default value
export const ApiConfigContext = createContext<ApiConfig>({
  baseUrl: 'https://my-mock-api.com/api',
});

// Custom hook for consuming the context
export function useApiConfig() {
  return useContext(ApiConfigContext);
}
