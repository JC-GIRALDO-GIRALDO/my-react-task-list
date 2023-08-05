import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";

export default function FormCreateList({ addList }) {
  const [values, setValues] = useState({ name: "", description: "" });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });

    setErrors({ ...errors, [name]: null });
  };

  const handleForm = (event) => {
    event.preventDefault();
    const { name, description } = values;

    if (name.trim().length < 4) {
      setErrors({
        ...errors,
        name: "The task name must contain more than 3 parameters",
      });
      return;
    }

    addList(name, description);
    setValues({ name: "", description: "" });
  };

  return (
    <form onSubmit={handleForm}>
      <div className="formPart1">
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
      </div>
      <div className="formPart2">
        {errors.name && <span className="error">{errors.name}</span>}
        <textarea
          name="description"
          value={values.description || ""}
          placeholder="Add task description..."
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
}
