import { FaBullseye, FaCheck } from "../../node_modules/react-icons/fa6";
import { useState } from "react";
export default function Task() {
  // genero una constante con useState en false
  const [crossOutTask, setCrossOutTask] = useState(false);

  const crossOut = () => {
    setCrossOutTask(!crossOutTask); // Cambia el valor del estado
  };

  /* genero una constante con un operador ternario 
     que al cambiar de estado cambiar de color */
  const buttonColor = crossOutTask ? "darkgreen" : "darkgoldenrod";

  return (
    <>
      {/* Retorno botón con valor de operador ternario  */}
      <button style={{ color: buttonColor }} onClick={crossOut}>
        <FaBullseye />
      </button>
      {/* Función para unir botón más estilo  */}
      {crossOutTask && <FaCheck style={{ marginLeft: "5px" }} />}
    </>
  );
}
