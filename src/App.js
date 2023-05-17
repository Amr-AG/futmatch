import Fixture from "./components/Fixture";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="fixture" element={<Fixture />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
