import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import Home from "../pages/Home";
import SobreNosotros from "../pages/SobreNosotros";
import Tareas from "../pages/Tareas";
import Header from "./Header";
import DarkLight from "./DarkLight";

function Menu() {
  return (
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

          <BreadcrumbItem>
            <Link
              to="/SobreNosotros"
              style={{ marginLeft: "10px", marginRight: "10px" }}
            >
              About us
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link to="/Tareas" style={{ marginLeft: "10px" }}>
              Tasks
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <DarkLight />
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route path="/Tareas" element={<Tareas />} />
        <Route path="*" element={<div>404 - error</div>} />
      </Routes>
    </div>
  );
}

export default Menu;
