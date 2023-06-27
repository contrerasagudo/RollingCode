import { useState } from "react";
import "./App.css";
import Titulo from "./components/Titulo";

function App() {
  const [count, setCount] = useState(0);
  const sumar = () => {
    setCount(count + 1);
  };
  const restar = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <>
    <h2>{count}</h2>
      <div className="contador">
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
      </div>
      <div >
        <Titulo texto={"Aqui esta un props"}/>
      </div>
    </>
  );
}

export default App;
