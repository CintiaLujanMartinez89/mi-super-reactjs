// ✅ Importamos React y el hook useState
import React, { useState } from "react";

function Carrito({ carrito, setCarrito }) {
  // ✅ Función para eliminar un producto del carrito
  const eliminarDelCarrito = (productoId) => {
    setCarrito(carrito.filter((producto) => producto.id !== productoId));
  };

  // ✅ Renderizamos el contenido del carrito
  return (
    <div style={{ marginTop: "50px", padding: "20px", backgroundColor: "#f1f1f1", borderRadius: "10px" }}>
      <h2>Carrito de Compras</h2>

      {/* ✅ Verificamos si hay productos en el carrito */}
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {carrito.map((producto) => (
            <div
              key={producto.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #ddd",
                padding: "10px",
              }}
            >
              {/* ✅ Información del producto */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={producto.imagen} alt={producto.nombre} style={{ width: "50px", height: "50px" }} />
                <div>
                  <h3>{producto.nombre}</h3>
                  <p>Precio: ${producto.precio}</p>
                </div>
              </div>

              {/* ✅ Botón para eliminar del carrito */}
              <button onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Carrito;