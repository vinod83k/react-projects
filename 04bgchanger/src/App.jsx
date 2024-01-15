import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  function changeColor(color) {
    setColor(color);
  }

  return (
    <div
      className="w-full h-screen duration-5000 bg-black"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-black"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => changeColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-black"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => changeColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-black"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
