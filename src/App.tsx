import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderContainer from "./containers/HeaderContainer";
import HomeContainer from "./containers/HomeContainer";
import HeroesCardContainer from "./containers/HeroesCardContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />

        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/characters" element={<HeroesCardContainer />} />
          <Route path="/characters/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
