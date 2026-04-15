import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Adopt from "./pages/Adopt";
import Ofera from "./pages/Offer";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopta" element={<Adopt />} />
        <Route path="/ofera" element={<Ofera />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}