import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SobreNosotros from "../pages/SobreNosotros";
import Tareas from "../pages/Tareas";
import Header from "./Header";

function Menu() {
  return (
    <>
      <div className="containerMain">
        <div className="nameAppMenu">
          <Header nameTaskList="Task-List" />
        </div>
        <div className="nameLink">
          <Link to="/">Home</Link>
          <Link to="SobreNosotros">Sobre Nosotros</Link>
          <Link to="Tareas">Tareas</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="SobreNosotros" element={<SobreNosotros />} />
        <Route path="Tareas" element={<Tareas />} />
        <Route path="*" element="404 - error" />
      </Routes>
    </>
  );
}
export default Menu;
