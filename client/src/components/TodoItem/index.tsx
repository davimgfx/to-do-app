import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import "./todoItem.styles.scss";

interface TodoItemProps {
  todoName: string;
}

export const TodoItem = ({ todoName }: TodoItemProps) => {
  const [isDone, setIsDone] = useState(false);

  const handleCheckboxChange = () => {
    setIsDone(!isDone);
  };

  return (
    <div className="todoItemContainer">
      <p>{isDone ? <del>{todoName}</del> : todoName}</p>

      <div className="iconsItems">
        <FiEdit className="iconEdit" />
        <FiTrash className="iconTrash" />
        <label className="checkboxContainer">
          <input
            type="checkbox"
            className="checkbox"
            checked={isDone}
            onChange={handleCheckboxChange}
          />
        </label>
      </div>
    </div>
  );
};
