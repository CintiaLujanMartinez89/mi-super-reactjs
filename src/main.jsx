
//Renderizar es hacer que los componentes sean visibles en la página.
//En React, usamos render() para mostrar un componente en el DOM.
// Cada vez que el estado cambia (useState), React vuelve a renderizar el componente actualizado.



// 📌 Importamos StrictMode para detectar problemas en la aplicación
import { StrictMode } from "react"; 

// 📌 Importamos createRoot para renderizar la aplicación en React 18+
import { createRoot } from "react-dom/client"; 

// 📌 Importamos los estilos globales del proyecto
import "./index.css"; 

// 📌 Importamos el componente principal de la aplicación
import App from "./App.jsx"; 

// 📌 Renderizamos el componente `App` dentro del elemento con id `root` en index.html
createRoot(document.getElementById("root")).render(
  <StrictMode> 
    <App />  {/* ✅ Aquí se monta toda la aplicación */}
  </StrictMode>,
);