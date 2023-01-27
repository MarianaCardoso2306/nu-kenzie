import { useState } from "react";
import illustration from "./assets/Illustration.svg";
import nuKenzieBlack from "./assets/NuKenzieBlack.svg";
import nuKenzieWhite from "./assets/NuKenzieWhite.svg";
import { LandingPage } from "./components/LandingPage";
import { HomePage } from "./components/HomePage";
import "./App.css";
import rectangle from "./assets/rectangle.svg";

const App = () => {
  const [page, setPage] = useState("LandingPage");
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="App">
      {page == "LandingPage" ? (
        <LandingPage
          setPage={setPage}
          nuKenzieBlack={nuKenzieBlack}
          illustration={illustration}
        />
      ) : (
        <HomePage
          setPage={setPage}
          nuKenzieWhite={nuKenzieWhite}
          rectangle={rectangle}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      )}
    </div>
  );
};

export default App;
