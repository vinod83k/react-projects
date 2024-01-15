import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-300 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <Card authorName="Vinod Kumar" post="Senior Consultant" />
      <Card authorName="Amit Maini" post="Architect" />
    </>
  );
}

export default App;
