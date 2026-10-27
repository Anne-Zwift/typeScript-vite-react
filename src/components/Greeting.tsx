import { type GreetingProps } from '../types/props';

export function Greeting({ name, message }: GreetingProps) {
  return (
    <div
      className='max-w-lg rounded overflow-hidden shadow-lg font-semibold text-xl text-blue-600 bg-white p-10 m-4 transform hover:scale-105 transition-transform duration-200'>
      <h1>
        Welcome {name}!, Let's get started{message}!
      </h1>
    </div>
  );
}
