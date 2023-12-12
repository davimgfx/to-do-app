import { Dispatch, SetStateAction, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { Notification } from "../../layout/MainLayout";
import { Modal } from "..";
import "./todoItem.styles.scss";

interface TodoItemProps {
  todoName: string;
  done: boolean;
  id: string;
  onDelete: () => void;
  setNotifications: Dispatch<SetStateAction<Notification[]>>;
}

export const TodoItem = ({
  todoName,
  done,
  onDelete,
  id,
  setNotifications,
}: TodoItemProps) => {
  const [isModalOn, setIsModalOn] = useState(false);

  const handleModal = () => {
    setIsModalOn(!isModalOn);
  };

  return (
    <div className="todoItemContainer">
      <p>{done ? <del>{todoName}</del> : todoName}</p>

      <div className="iconsItems">
        <FiEdit className="iconEdit" onClick={handleModal} />
        <FiTrash className="iconTrash" onClick={() => onDelete()} />
        <label className="checkboxContainer"></label>
        {isModalOn && (
          <Modal
            handleModal={handleModal}
            id={id}
            name={todoName}
            done={done}
            setNotifications={setNotifications}
          />
        )}
      </div>
    </div>
  );
};
