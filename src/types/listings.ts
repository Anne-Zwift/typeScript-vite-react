// Types for the generic DataCard

export interface CarListing {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
}

export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
}

// Discriminated Union for StatusPill
type ActivePillProps = { status: 'ACTIVE'; lastRenewed: string; views: number };
type SoldPillProps = { status: 'SOLD'; soldDate: string; price: number };
type ExpiredPillProps = { status: 'EXPIRED'; expiryDate: string };

export type ListingStatusPillProps =
  | ActivePillProps
  | SoldPillProps
  | ExpiredPillProps;

// Type definitions for the API response shape
export interface GameImage {
  url: string;
  alt: string;
}

export interface OldGame {
  [x: string]: ReactNode;
  id: number;
  title: string;
  description: string;
  genre: string;
  released: number;
  image: GameImage;
}

export interface SingleOldGameApiResponse {
  data: OldGame;
  meta: Record<string, unknown>;
}
