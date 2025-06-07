import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Productos from "./pages/Productos";
import Inicio from "./pages/Inicio"; // 🔹 Ahora se llama "Inicio"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} /> {/* 🔹 Cambio aplicado */}
          <Route path="/productos" element={<Productos />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
