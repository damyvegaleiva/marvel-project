import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderContainer from "./containers/HeaderContainer";
import HomeContainer from "./containers/HomeContainer";
import HeroesContainer from "./containers/HeroesContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />

        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/heroes" element={<HeroesContainer />} />
          <Route path="/heroes/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
