import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderContainer from "./containers/HeaderContainer";
import HomeContainer from "./containers/HomeContainer";
import HeroesCardsContainer from "./containers/HeroesCardsContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />

        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/characters" element={<HeroesCardsContainer />} />
          <Route path="/characters/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
