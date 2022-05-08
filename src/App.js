import { useState } from "react";
import "./App.css";
import Board from "./Board";
import Timer from "./Timer";

function App() {
  const [duration, setDuration] = useState(180);
  const [isStopped, setIsStopped] = useState(true);

  return (
    <div className="App">
      <Timer
        duration={duration}
        setDuration={setDuration}
        isStopped={isStopped}
        setIsStopped={setIsStopped}
      />
      <Board duration={duration} isStopped={isStopped} />
    </div>
  );
}

export default App;
