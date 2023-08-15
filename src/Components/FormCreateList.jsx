import React, { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Input, Textarea, Button, Alert, AlertIcon } from "@chakra-ui/react";

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
        <Input
          fontSize="25px"
          _placeholder={{ fontSize: "30px" }}
          width="470px"
          height="55px"
          type="text"
          name="name"
          value={values.name || ""}
          placeholder="Add your new task..."
          onChange={handleInputChange}
        />

        <Button
          type="submit"
          width="55%"
          margin="0 auto"
          height="45px"
          variant="outline"
          backgroundColor="blue.400"
        >
          <AddIcon />
        </Button>
      </div>
      <div className="formPart2">
        {errors.name && (
          <Alert status="error">
            <AlertIcon />
            {errors.name}
          </Alert>
        )}
        <Textarea
          fontSize="25px"
          _placeholder={{ fontSize: "30px" }}
          name="description"
          value={values.description || ""}
          placeholder="Add task description..."
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
}
