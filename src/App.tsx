import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>MARVEL DEV HOME</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
