import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductSingle from "./pages/ProductSingle";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductSingle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
