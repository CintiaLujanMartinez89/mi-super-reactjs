// src/components/Layout.jsx
import React from "react";
import BarraNavegacion from "./barra_navegacion"; // Reutilizamos la barra

const Layout = ({ children }) => {
  return (
    <>
      <BarraNavegacion />
      <main style={{ marginTop: "100px", padding: "20px" }}>
        {children} {/* Acá se renderiza la página según la ruta */}
      </main>
    </>
  );
};

export default Layout;
