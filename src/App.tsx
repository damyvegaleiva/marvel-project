import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";
import CharacterDataContainer from "./containers/CharacterDataContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />

        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/characters" element={<CharacterDataContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
