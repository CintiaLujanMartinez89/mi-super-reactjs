const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta para obtener productos
app.get("/api/productos", (req, res) => {
  res.json([
    {
      id: 1,
      nombre: "Arroz",
      precio: 100,
      imagen: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
    },
    {
      id: 2,
      nombre: "Fideos",
      precio: 80,
      imagen: "https://cdn-icons-png.flaticon.com/512/1046/1046856.png"
    },
    {
      id: 3,
      nombre: "Aceite",
      precio: 350,
      imagen: "https://cdn-icons-png.flaticon.com/512/1046/1046758.png"
    }
  ]);
});

// Servidor escuchando
app.listen(PORT, () => {
  console.log(`✅ Backend corriendo en http://localhost:${PORT}`);
});
