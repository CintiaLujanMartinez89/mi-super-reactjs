app.post("/api/pago", async (req, res) => {
  try {
    const preference = {
      items: [
        { title: "Producto de prueba", quantity: 1, currency_id: "ARS", unit_price: 1000 },
      ],
      back_urls: {
        success: "https://3b24-2803-9800-90b0-fd3-7478-5c34-72eb-efef.ngrok-free.app/api/productos",
        failure: "https://3b24-2803-9800-90b0-fd3-7478-5c34-72eb-efef.ngrok-free.app/api/productos",
        pending: "https://3b24-2803-9800-90b0-fd3-7478-5c34-72eb-efef.ngrok-free.app/api/productos",
      },
      auto_return: "approved",
    };

    const response = await mercadopago.preferences.create(preference);
    res.json({ init_point: response.body.init_point });
  } catch (error) {
    console.error("❌ Error al generar pago:", error);
    res.status(500).json({ error: "Error al generar pago" });
  }
});