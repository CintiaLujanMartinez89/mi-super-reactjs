import React from "react";
import "./barra_navegacion.css"; // ✅ Importamos los estilos

const BarraNavegacion = () => {
  return (
    <header className="navbar">
      <h1>Supermercado Online 🛒</h1>
      <nav>
        <ul className="nav-list">
          <li><a href="/">Inicio</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="/carrito">Carrito</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default BarraNavegacion;