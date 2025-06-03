// 📌 Importamos las dependencias necesarias
import { useState } from "react"; // ✅ Manejo de estado en React

import "./App.css"; // ✅ Importamos los estilos
import BarraNavegacion from "./components/barra_navegacion"; // ✅ Importamos la barra de navegación

// 📌 Definimos el componente principal de la aplicación
function App() {

 

  return (
    <>
      {/* ✅ Agregamos la barra de navegación en la parte superior */}
      <BarraNavegacion />
    
    </>
  );
}

// 📌 Exportamos el componente `App` para que sea usado en `main.jsx`
export default App;