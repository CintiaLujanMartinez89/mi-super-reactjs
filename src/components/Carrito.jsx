import React from "react";
import "./carrito.css"; // ✅ Importar los estilos

const Carrito = ({ carrito = [], setCarrito }) => {
  console.log("🛒 Componente Carrito montado! Carrito:", carrito);

  const aumentarCantidad = (id) => {
    setCarrito(
      carrito.map((producto) =>
        producto.id === id ? { ...producto, cantidad: producto.cantidad + 1 } : producto
      )
    );
  };

  const disminuirCantidad = (id) => {
    setCarrito(
      carrito.map((producto) =>
        producto.id === id && producto.cantidad > 1
          ? { ...producto, cantidad: producto.cantidad - 1 }
          : producto
      )
    );
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((producto) => producto.id !== id));
  };

  const total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);

  return (
    <aside className="carrito">
      <h2>🛒 Carrito</h2>

      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {carrito.map((producto) => (
            <div key={producto.id} className="carrito-producto">
              <img src={producto.imagen} alt={producto.nombre} />

              <div className="carrito-detalle">
                <p><strong>{producto.nombre}</strong></p>
                <p>Precio: ${producto.precio}</p>
                <div className="carrito-controles">
                  <button className="disminuir" onClick={() => disminuirCantidad(producto.id)}>➖</button>
                  <span>{producto.cantidad}</span>
                  <button className="aumentar" onClick={() => aumentarCantidad(producto.id)}>➕</button>
                </div>
              </div>

              <button className="carrito-eliminar" onClick={() => eliminarDelCarrito(producto.id)}>❌</button>
            </div>
          ))}
          <h3 className="carrito-total">Total: ${total}</h3>
        </div>
      )}
    </aside>
  );
};

export default Carrito;