"use client";

import { useState, ChangeEvent } from "react";
import { IoIosAddCircle } from "react-icons/io";
import "./addTodo.styles.scss";
import Tasks from "../../api/Tasks";

export const AddTodo = () => {
  const [values, setValues] = useState({
    name: "",
    completed: false,
  });

  const handleChangeForm = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      completed: event.target.checked,
    });
  };

  const handleAddTask = async () => {
    try {
      await Tasks.post("/", { ...values });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="addTodoContainer">
      <input type="text" name="name" className="input" onChange={handleChangeForm} />
      <input
        type="checkbox"
        className="checkbox"
        onChange={handleCheckboxChange}
      />
      <IoIosAddCircle className="addIcon" onClick={handleAddTask} />
    </div>
  );
};