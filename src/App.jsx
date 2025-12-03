import { useState } from "react";
import { Header } from "./Header";
import { Start } from "./Start";
import { Fokusfrage } from "./Fokusfrage";
import { Explore } from "./Explore";
import "./App.css";

function App() {
  const [page, setPage] = useState("start"); // "start" | "fokusfrage" | "explore"

  return (
    <div className="app">
      {/* Header con titolo + bottoni di navigazione */}
      <Header page={page} setPage={setPage} />

      {/* Contenuto che cambia in base a page */}
      <div className="mainArea">
        {page === "start" && <Start />}
        {page === "fokusfrage" && <Fokusfrage />}
        {page === "explore" && <Explore />}
      </div>
    </div>
  );
}

export default App;
