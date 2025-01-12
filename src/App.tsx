import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderContainer from "./containers/HeaderContainer";
import HomeContainer from "./containers/HomeContainer";
import CharactersContainer from "./containers/CharactersContainer";
import FooterContainer from "./containers/FooterContainer";
import CharacterDetailContainer from "./containers/CharacterDetailContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />

        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/characters" element={<CharactersContainer />} />
          <Route path="/character/:id" element={<CharacterDetailContainer />} />
        </Routes>

        <FooterContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
