import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" mx-auto p-8 text-center font-sans text-neutral-200 bg-neutral-900 min-h-screen flex flex-col items-center justify-center">
      <div className="flex justify-center gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={viteLogo}
            alt="Vite logo"
            className="h-24 p-6 transition-filter duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            alt="React logo"
            className="h-24 p-6 transition-filter duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] animate-spin-slow"
          />
        </a>
      </div>

      <h1 className="text-5xl font-bold leading-tight mb-8 text-white">
        Vite + React
      </h1>

      <div className="bg-neutral-800 p-8 rounded-xl shadow-md mb-8 w-full max-w-lg">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="bg-neutral-700 text-white rounded-lg px-6 py-3 font-medium border border-transparent hover:border-[#646cff] transition-colors cursor-pointer"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-400">
          Edit <code className="bg-black/20 px-1 rounded">src/App.tsx</code> and
          save to test HMR
        </p>
      </div>

      <p className="text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
