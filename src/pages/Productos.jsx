// ✅ Importamos React y los hooks necesarios
import React, { useEffect, useState } from "react";
import Carrito from "../components/Carrito";

function Productos() {
  // ✅ Estado para guardar la lista de productos que trae el backend
  const [productos, setProductos] = useState([]);

  // ✅ Estado para guardar los productos que el usuario agrega al carrito
  const [carrito, setCarrito] = useState([]);

  // ✅ useEffect se ejecuta una vez al montar el componente
 useEffect(() => {
  fetch("https://3b24-2803-9800-90b0-fd3-7478-5c34-72eb-efef.ngrok-free.app/api/productos", {
 headers: {
    "Accept": "application/json",
    "ngrok-skip-browser-warning": "true" // ✅ Ignorar advertencia de Ngrok
  },

  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`❌ Error en la solicitud! Código HTTP: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log("✅ Productos procesados correctamente:", data);
      setProductos(data);
    })
    .catch((error) => console.error("❌ Error al cargar productos:", error));
}, []);

  // ✅ Función para agregar un producto al carrito
const agregarAlCarrito = (producto) => {
  const productoExistente = carrito.find((item) => item.id === producto.id);

  if (productoExistente) {
    setCarrito(
      carrito.map((item) =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  } else {
    setCarrito([...carrito, { ...producto, cantidad: 1 }]);
  }
};

  return (
    <div style={{ marginTop: "5px", padding: "5px" }}>
      <h2>Productos disponibles</h2>
    
      {/* // ✅ Mostrar los datos en JSON para depuración }
      <pre style={{ background: "#f1f1f1", padding: "10px", borderRadius: "5px" }}>
        {JSON.stringify(productos, null, 2)}
      </pre>  */}

      {/* ✅ Contenedor de tarjetas */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {/* ✅ Verificar si hay productos antes de intentar mapearlos */}
        {productos && productos.length > 0 ? (
          productos.map((producto) => (
            <div
              key={producto.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                width: "150px",
                textAlign: "center",
                backgroundColor: "#f9f9f9",
              }}
            >
              {/* ✅ Verificar si `producto.imagen` está definido */}
              {producto.imagen ? (
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  style={{ width: "90px", height: "90px" }}
                />
              ) : (
                <p>Imagen no disponible</p>
              )}

              {/* ✅ Nombre y precio */}
              <h3>{producto.nombre}</h3>
              <p>Precio: ${producto.precio}</p>

              {/* ✅ Botón para agregar al carrito */}
              <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
            </div>
          ))
        ) : (
          <p style={{ color: "red" }}>Cargando productos... o no hay productos disponibles.</p>
        )}
      </div>

      {/* ✅ Agregamos el carrito debajo de los productos */}
      <Carrito carrito={carrito} setCarrito={setCarrito} />
    </div>
  );
}

// ✅ Exportamos el componente para usarlo en las rutas
export default Productos;