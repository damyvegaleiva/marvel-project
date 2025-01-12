import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderContainer from "./containers/HeaderContainer";
import HomeContainer from "./containers/HomeContainer";
import CharactersContainer from "./containers/CharactersContainer";
import FooterContainer from "./containers/FooterContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />

        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/characters" element={<CharactersContainer />} />
          <Route path="/character/:id" />
        </Routes>

        <FooterContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
