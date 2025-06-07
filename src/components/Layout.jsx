import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import BarraNavegacion from "./barra_navegacion";
import Carrito from "./Carrito";

const Layout = ({ children }) => {
  const location = useLocation();
  const [carrito, setCarrito] = useState([]);

  console.log("📍 Ruta actual:", location.pathname);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* ✅ Barra de navegación corregida */}
      <BarraNavegacion />

      <div style={{
        display: "flex",
        flex: "1",
        marginTop: "80px", /* 🔹 Ajuste para que no tape el contenido */
        padding: "20px",
      }}>
        {location.pathname !== "/" && <Carrito carrito={carrito} setCarrito={setCarrito} />}
        
        <main style={{
          flex: "1",
          paddingRight: location.pathname !== "/" ? "320px" : "0px",
        }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;