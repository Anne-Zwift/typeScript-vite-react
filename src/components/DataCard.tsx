import type { ReactNode } from 'react';

// Generic props: item of type T, and a render prop function that returns JSX
interface DataCardProps<T> {
  item: T;
  renderContent: (item: T) => ReactNode;
}

// Generic DataCard component — constrained to object types
export function DataCard<T extends object>({
  item,
  renderContent,
}: DataCardProps<T>) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '12px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        fontFamily: 'sans-serif',
      }}>
      {renderContent(item)}
    </div>
  );
}
