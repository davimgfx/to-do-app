// AddTodo.js
import { useState, ChangeEvent } from "react";
import { IoIosAddCircle } from "react-icons/io";
import Tasks from "../../api/Tasks";
import "./addTodo.styles.scss";
import { setNotificationProps } from "../../layout/MainLayout";

export const AddTodo = ({ setNotifications } : setNotificationProps) => {
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
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        { type: "success", description: "Task added successfully!" },
      ]);
    } catch (error) {
      console.log(error);
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        { type: "error", description: "Error: Task name required!" },
      ]);
    }
  };

  return (
    <div className="addTodoContainer">
      <input
        type="text"
        name="name"
        className="input"
        onChange={handleChangeForm}
      />
      <input
        type="checkbox"
        className="checkbox"
        onChange={handleCheckboxChange}
      />
      <IoIosAddCircle className="addIcon" onClick={handleAddTask} />
    </div>
  );
};
