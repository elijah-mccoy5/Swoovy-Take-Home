import { createContext } from "react";
import "./App.css";
import data from "./dummy.json";
import Navbar from "./components/navbar";
import Events from "./screens/events";

export const eventContext = createContext<
  {
    title: string;
    date: string;
    location: string;
    description: string;
    image: string;
  }[]
>([]);

function App() {
  return (
    <div className="app">
      <Navbar />
      <eventContext.Provider value={data}>
        <Events />
      </eventContext.Provider>
    </div>
  );
}

export default App;
