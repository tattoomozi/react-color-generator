import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

// Must have in React
export default function App() {
  // Button Action for changable Color
  const [poopy, setPoopy] = useState(randomColor());
  return (
    <div className="App">
      <h1>Color Generator </h1>
      <div>
        {poopy}
        {/* Add a Button with on-click-action */}
        <button
          onClick={() => {
            const otherColor = randomColor();
            setPoopy(otherColor);
          }}
        >
          Generate
        </button>
      </div>

      {/* Create Box and display code and color */}
      <div style={{ backgroundColor: poopy }}>Generated Color: {poopy}</div>
    </div>
  );
}
