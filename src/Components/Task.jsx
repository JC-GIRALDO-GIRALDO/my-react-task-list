import { FaBullseye } from "../../node_modules/react-icons/fa6";
import { useState } from "react";
export default function Task() {
  const [crossOutTask, setCrossOutTask] = useState(false);

  const crossOut = () => {
    setCrossOutTask(!crossOutTask);
  };

  const buttonColor = crossOutTask ? "darkgreen" : "darkred";

  return (
    <>
      <button style={{ color: buttonColor }} onClick={crossOut}>
        {" "}
        <FaBullseye />
      </button>
    </>
  );
}
