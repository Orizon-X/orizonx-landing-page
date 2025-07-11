import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-auto flex min-h-screen flex-col items-center justify-center bg-neutral-900 p-8 text-center font-sans text-neutral-200">
      <div className="mb-8 flex justify-center gap-8">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={viteLogo}
            alt="Vite logo"
            className="transition-filter h-24 p-6 duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            alt="React logo"
            className="transition-filter animate-spin-slow h-24 p-6 duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa]"
          />
        </a>
      </div>

      <h1 className="mb-8 text-5xl leading-tight font-bold text-white">Vite + React</h1>

      <div className="mb-8 w-full max-w-lg rounded-xl bg-neutral-800 p-8 shadow-md">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="cursor-pointer rounded-lg border border-transparent bg-neutral-700 px-6 py-3 font-medium text-white transition-colors hover:border-[#646cff]"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-400">
          Edit <code className="rounded bg-black/20 px-1">src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="text-gray-500">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
