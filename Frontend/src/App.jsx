import { useState } from "react";
import { Header } from "./Header";
import { Start } from "./Start";
import { Fokusfrage } from "./Fokusfrage";
import { Explore } from "./Explore";
import "./App.css";

function App() {
  const [page, setPage] = useState("start");

  return (
    <div className="app">
      <header className="header">
        <Header page={page} setPage={setPage} />
      </header>

      <main className="main">
        {page === "start" && <Start />}
        {page === "fokusfrage" && <Fokusfrage />}
        {page === "explore" && <Explore />}
      </main>
    </div>
  );
}

export default App;
