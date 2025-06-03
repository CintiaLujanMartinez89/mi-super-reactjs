import React from "react";
import { Link } from "react-router-dom"; // ✅ Importamos Link
import "./barra_navegacion.css"; // ✅ Estilos

const BarraNavegacion = () => {
  return (
    <header className="navbar">
      <h1>Supermercado Online 🛒</h1>
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/carrito">Carrito</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default BarraNavegacion;
