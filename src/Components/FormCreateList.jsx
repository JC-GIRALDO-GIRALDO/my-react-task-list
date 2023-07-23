import React, { useState, useEffect } from "react";
import { FaPlusSquare } from "../../node_modules/react-icons/fa";

// Componente con formulario para crear una nueva lista de tareas

export default function FormCreateList({ addList }) {
  const [values, setValues] = useState({ name: "" });

  //se activa cuando el valor del campo de entrada cambia
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  //se activa cuando el formulario se envía (al hacer clic en el botón de envío)
  const handleForm = (event) => {
    event.preventDefault();
    console.log(values);
    if (values.name.trim() !== "") {
      addList(values.name); // Agregar el nombre de la nueva lista utilizando la función addList
      setValues({ name: "" }); // Limpia el campo de entrada (name) después de enviar el formulario
    }
  };

  useEffect(() => {
    // Cargar el valor inicial del input desde el localStorage al montar el componente
    const storedValue = localStorage.getItem("inputValue");
    if (storedValue) {
      setValues({ name: JSON.parse(storedValue) });
    }
  }, []);

  useEffect(() => {
    // Guardar el valor del input en el localStorage cada vez que cambia
    localStorage.setItem("inputValue", JSON.stringify(values.name));
  }, [values.name]);

  return (
    <>
      <form onSubmit={handleForm}>
        <input
          type="text"
          name="name"
          value={values.name || ""}
          placeholder="Add your new task..."
          onChange={handleInputChange}
        />
        <button type="submit">
          <FaPlusSquare className="icons" />
        </button>
      </form>
    </>
  );
}
