import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomeContainer from "./containers/HomeContainer";
import CharacterContainer from "./containers/CharacterContainer";
import HeaderContainer from "./containers/HeaderContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />

        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/character/:name" element={<CharacterContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
