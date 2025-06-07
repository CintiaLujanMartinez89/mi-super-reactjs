require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sql = require("mssql");

const app = express();
const PORT = 3001;

// ✅ Middleware CORS (incluye ngrok-skip-browser-warning)
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "ngrok-skip-browser-warning"]
}));

app.use(express.json());

// ✅ Configuración de conexión SQL Server
const config = {
  user: process.env.DB_USER || "public_user",
  password: process.env.DB_PASSWORD || "password123",
  server: process.env.DB_SERVER || "localhost",
  database: process.env.DB_NAME || "supermercado",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

// ✅ Conexión a la base de datos
let pool;

async function conectarDB() {
  try {
    if (!pool) {
      pool = await sql.connect(config);
      console.log("✅ Conectado a SQL Server");
    }
    return pool;
  } catch (error) {
    console.error("❌ Error conectando a la base de datos:", error);
    throw error;
  }
}

conectarDB(); // 🔹 Conectar al iniciar

// ✅ Ruta para obtener productos
app.get("/api/productos", async (req, res) => {
  try {
    if (!pool) await conectarDB();

    const result = await pool.request().query("SELECT * FROM productos");

    console.log("🧐 Datos de la base de datos:", result.recordset);

    res.status(200).json(result.recordset); // ✅ Devolver productos como JSON
  } catch (error) {
    console.error("❌ Error en la consulta SQL:", error);
    res.status(500).json({ error: "Error al obtener productos" });
  }
});

// ✅ Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Backend corriendo en http://localhost:${PORT}`);
});
