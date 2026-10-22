export interface FylkeProps {
  name: string;
  population: number;
  areaSqKm: number;
  imageUrl?: string;
}

export function FylkeDisplay({
  name,
  population,
  areaSqKm,
  imageUrl,
}: FylkeProps) {
  return (
    <div style={{ padding: '15px', border: '1px solid #ccc', margin: '10px 0', background: 'rgba(85, 178, 255, 0.33)' }}>
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', marginBottom: '16px', maxWidth: '400px' }}>
      {imageUrl && (
      <img
        src={imageUrl}
        alt={`Image of ${name}`}
        style={{ width: '100%', borderRadius: '4px', marginBottom: '12px' }}
      />
      )}
      <h2>{name}</h2>
      <p><strong>Population:</strong>{population.toLocaleString('nb-NO')}</p>
      <p><strong>Area in sqKm:</strong>{areaSqKm.toLocaleString('nb-NO')}</p>
    </div>
    </div>
  );
}
