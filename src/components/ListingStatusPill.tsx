import type { ListingStatusPillProps } from '../types/listings';

// Component uses discriminated union narrowing via props.status
export function ListingStatusPill(props: ListingStatusPillProps) {
  switch (props.status) {
    case 'ACTIVE':
      return (
        <span
          style={{
            background: '#d1fae5',
            color: '#065f46',
            padding: '4px 12px',
            borderRadius: '9999px',
            fontSize: '0.85rem',
            fontWeight: 600,
          }}>
          Active - {props.views} views - Renewed {props.lastRenewed}
        </span>
      );
    case 'SOLD':
      return (
        <span
          style={{
            background: '#dbeafe',
            color: '#1e40af',
            padding: '4px 12px',
            borderRadius: '9999px',
            fontSize: '0.85rem',
            fontWeight: 600,
          }}>
          Sold {props.soldDate} - {props.price.toLocaleString('nb-NO')} kr
        </span>
      );
    case 'EXPIRED':
      return (
        <span
          style={{
            background: '#fee2e2',
            color: '#991b1b',
            padding: '4px 12px',
            borderRadius: '9999px',
            fontSize: '0.85rem',
            fontWeight: 600,
          }}>
          Expired {props.expiryDate}
        </span>
      );
  }
}
