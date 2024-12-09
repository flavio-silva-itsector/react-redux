import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const title = "React Redux";

  return (
    <>
      <h1>{title}</h1>
      <div className="card">
        <p>
          count is {count}
        </p>

        <button onClick={() => setCount((count) => count + 1)}>Increment</button>
        <button onClick={() => setCount((count) => count + 1)}>Decrement</button>
        <button onClick={() => setCount((count) => count + 1)}>Reset</button>
      </div>

    </>
  )
}

export default App
