import { type GreetingProps } from '../types/props';

export function Greeting({ name, message }: GreetingProps) {
  return (
    <div
      style={{ padding: '15px', border: '1px solid #ccc', margin: '10px 0', background: 'rgba(85, 178, 255, 0.33)' }}>
      <h1>
        Welcome {name}!, Let's get started{message}!
      </h1>
    </div>
  );
}
