require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sql = require("mssql");

const app = express();
const PORT = 3001;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Configuración de SQL Server
const config = {
  user: process.env.DB_USER || "public_user", // Usuario de solo lectura
  password: process.env.DB_PASSWORD || "password123", // Contraseña
  server: process.env.DB_SERVER || "localhost", // Servidor SQL Server
  database: process.env.DB_NAME || "supermercado",
  options: {
    encrypt: true, // Activar si usas Azure
    trustServerCertificate: true, // Para entornos locales
  },
};

// ✅ Conectar a la base de datos al iniciar el servidor
async function conectarDB() {
  try {
    const pool = await sql.connect(config);
    console.log("✅ Conectado a SQL Server");
    return pool;
  } catch (error) {
    console.error("❌ Error conectando a la base de datos:", error);
    throw error;
  }
}

let pool;
conectarDB().then((dbPool) => (pool = dbPool));

// ✅ Ruta para obtener productos desde SQL Server
app.get("/api/productos", async (req, res) => {
  try {
    const result = await pool.request().query("SELECT * FROM productos");
    res.json(result.recordset);
  } catch (error) {
    console.error("❌ Error obteniendo productos:", error);
    res.status(500).json({ error: "Error obteniendo productos" });
  }
});

// ✅ Servidor escuchando
app.listen(PORT, () => {
  console.log(`🚀 Backend corriendo en http://localhost:${PORT}`);
});