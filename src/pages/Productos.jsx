// ✅ Importamos React y los hooks necesarios
import React, { useEffect, useState } from "react";

function Productos() {
  // ✅ Estado para guardar la lista de productos que trae el backend
  const [productos, setProductos] = useState([]);

  // ✅ Estado para guardar los productos que el usuario agrega al carrito
  const [carrito, setCarrito] = useState([]);

  // ✅ useEffect se ejecuta una vez al montar el componente
  // Acá hacemos la solicitud al backend para traer los productos
  useEffect(() => {
    fetch("http://localhost:3001/api/productos") // Cambiar puerto si usás otro
      .then((res) => res.json()) // Convertimos la respuesta a JSON
      .then((data) => setProductos(data)) // Guardamos los productos en el estado
      .catch((error) =>
        console.error("Error al cargar productos desde el backend:", error)
      );
  }, []);

  // ✅ Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]); // Agregamos al array sin mutarlo
    alert(`${producto.nombre} agregado al carrito`);
  };

  // ✅ Renderizamos el contenido de la página
  return (
    <div style={{ marginTop: "100px", padding: "20px" }}>
      <h2>Productos disponibles</h2>

      {/* ✅ Contenedor de tarjetas */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {/* ✅ Iteramos sobre los productos para mostrar uno por uno */}
        {productos.map((producto) => (
          <div
            key={producto.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              width: "200px",
              textAlign: "center",
              backgroundColor: "#f9f9f9",
            }}
          >
            {/* ✅ Imagen del producto */}
            <img
              src={producto.imagen}
              alt={producto.nombre}
              style={{ width: "100px", height: "100px" }}
            />

            {/* ✅ Nombre y precio */}
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>

            {/* ✅ Botón para agregar al carrito */}
            <button onClick={() => agregarAlCarrito(producto)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ✅ Exportamos el componente para usarlo en las rutas
export default Productos;
