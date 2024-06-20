import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count+1);
  }

  const decrement = () => {
    setCount(count-1);
  }

  const restart = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1 data-testid="count">{count}</h1>
        <p>
          Counting App made by Al - Hadar
        </p>
        <div className='inline-button'>
          <button onClick={increment}>Increment, Cuy</button>
          <button onClick={restart}>Restart</button>
          <button onClick={decrement}>Decrement, Skuy</button>
        </div>
        <p>
          Know more about me? &nbsp;
          <a
            className="App-link"
            href="https://galvanic-tea-401809.et.r.appspot.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sambang yuk
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
