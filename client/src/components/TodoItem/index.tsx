import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import "./todoItem.styles.scss";

interface TodoItemProps {
  todoName: string;
  done: boolean;
  id: string;
  onDelete: () => void;
}

export const TodoItem = ({ todoName, done, onDelete }: TodoItemProps) => {
  const [isDone, setIsDone] = useState(false);

  const handleCheckboxChange = () => {
    setIsDone(!isDone);
  };

  return (
    <div className="todoItemContainer">
      <p>{done ? <del>{todoName}</del> : todoName}</p>

      <div className="iconsItems">
        <FiEdit className="iconEdit" />
        <FiTrash className="iconTrash" onClick={() => onDelete()} />
        <label className="checkboxContainer">
          <input
            type="checkbox"
            className="checkbox"
            checked={done}
            onChange={handleCheckboxChange}
          />
        </label>
      </div>
    </div>
  );
};
