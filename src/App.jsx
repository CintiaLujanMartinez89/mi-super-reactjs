// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Productos from "./pages/Productos";
// Podés agregar otras páginas como Home y Carrito

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/productos" element={<Productos />} />
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/carrito" element={<Carrito />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
