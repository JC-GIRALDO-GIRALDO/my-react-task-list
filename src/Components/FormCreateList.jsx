import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";

export default function FormCreateList({ addList }) {
  const [values, setValues] = useState({ name: "", description: "" });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    // Clear the error for the input when the user starts typing
    setErrors({ ...errors, [name]: null });
  };

  const handleForm = (event) => {
    event.preventDefault();
    const { name, description } = values;

    // Validate the name length (at least 3 characters)
    if (name.trim().length < 3) {
      setErrors({ ...errors, name: "Name must have at least 3 characters." });
      return;
    }

    // Call addList only if the name is valid
    addList(name, description);
    setValues({ name: "", description: "" });
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
      {errors.name && <span className="error">{errors.name}</span>}
      <button type="submit">
        <FaPlusSquare className="icons" />
      </button>
      <textarea
        name="description"
        value={values.description || ""}
        placeholder="Add task description..."
        onChange={handleInputChange}
      />
    </form>
  );
}
