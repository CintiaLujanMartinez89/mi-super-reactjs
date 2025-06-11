require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sql = require("mssql");
const path = require("path");
const app = express();
const PORT = 3001;
const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token: "APP_USR-4640012569313894-061109-e7aaa13312a3566dd4ef74c68e51c3c9-44370823", // 🔹 Reemplázalo con tu clave de Mercado Pago
});
// ✅ Middleware CORS (incluye ngrok-skip-browser-warning)
app.use(cors({
  origin: "*", // ✅ Puedes cambiar "*" por "http://localhost:5173" para mayor seguridad
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "ngrok-skip-browser-warning", "Authorization"],
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "mi-super-reactjs")));
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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

// ✅ Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Backend corriendo en http://localhost:${PORT}`);
});
