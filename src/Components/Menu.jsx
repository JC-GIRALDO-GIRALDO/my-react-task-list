import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SobreNosotros from "../pages/SobreNosotros";
import Tareas from "../pages/Tareas";
import Header from "./Header";
import DarkLight from "./DarkLight";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

function Menu() {
  return (
    <>
      <div className="containerMain">
        <div className="nameAppMenu">
          <Header nameTaskList="Task-List" />
        </div>
        <div className="nameLink">
          <Breadcrumb fontWeight="medium" fontSize="sm">
            <BreadcrumbItem>
              <Link to="/" style={{ marginRight: "10px" }}>
                Home
              </Link>
            </BreadcrumbItem>
            <span style={{ margin: "0 10px" }}>/</span>
            <BreadcrumbItem>
              <Link
                to="SobreNosotros"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              >
                Sobre Nosotros
              </Link>
            </BreadcrumbItem>
            <span style={{ margin: "0 10px" }}>/</span>
            <BreadcrumbItem>
              <Link to="Tareas" style={{ marginLeft: "10px" }}>
                Tareas
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <DarkLight />
            </BreadcrumbItem>
          </Breadcrumb>
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
