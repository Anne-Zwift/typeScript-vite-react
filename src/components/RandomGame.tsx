import type { OldGame, SingleOldGameApiResponse } from '../types/listings';
import { useState, useEffect } from 'react';

export function RandomGame() {
  // 1. strict states
  const [game, setGame] = useState<OldGame | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch a random game from the Noroff API on mount
  useEffect(() => {
    async function fetchGame() {
      try {
        const res = await fetch('https://v2.api.noroff.dev/old-games/random');
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: Could not fetch games`);
        }
        const json: SingleOldGameApiResponse = await res.json();
        setGame(json.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown Error');
      } finally {
        setLoading(false);
      }
    }
    fetchGame();
  }, []);

  // views
  if (loading) return <p>Loading random game...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (!game) return <p>No random games Available</p>;

  return (
    <div
      style={{
        border: '1px solid #d1d5db',
        borderRadius: '8px',
        padding: '16px',
        margin: '40px',
        width: '0 auto',
      }}>
      <h3 style={{ color: 'blue', margin: '20px' }}>
        <strong style={{fontSize: '40px'}}>{game.name}</strong>({game.released})
      </h3>
      <img
        src={game.image.url}
        alt={game.image.alt}
        style={{ width: '100%', borderRadius: '4px' }}
      />
      <p style={{marginTop: '10px'}}>{game.description}</p>
      <p>
        <strong style={{marginTop: '20px'}}>
          <em>Genre: {game.genre}</em>
        </strong>
      </p>
    </div>
  );
}
