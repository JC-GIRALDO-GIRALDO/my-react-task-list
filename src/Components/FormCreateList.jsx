import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";

export default function FormCreateList({ addList }) {
  const [values, setValues] = useState({ name: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleForm = (event) => {
    event.preventDefault();
    if (values.name.trim() !== "") {
      addList(values.name);
      setValues({ name: "" });
    }
  };

  return (
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
  );
}
