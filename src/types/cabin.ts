// The blueprint for what a cabin object should look like
export interface Cabin {
  id: number;
  name: string;
  region: 'Fjellheimen' | 'Kysten' | 'Skogen'; // limited to 3 regions
  pricePerNight: number;
}

// Interface for the API configuration object
export interface ApiConfig {
  baseUrl: string;
}
