import { AiOutlineClose } from "react-icons/ai";
import "./modal.styles.scss";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Notification } from "../../layout/MainLayout"
import Tasks from "../../api/Tasks";

interface ModalProps {
  id: string;
  name: string;
  done: boolean;
  handleModal: () => void;
  setNotifications: Dispatch<SetStateAction<Notification[]>>;
}

export const Modal = ({
  handleModal,
  id,
  name,
  done,
  setNotifications,
}: ModalProps) => {
  const [values, setValues] = useState({
    name: name,
    completed: done,
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

  const handleSave = async () => {
    try {
      await Tasks.patch(`/${id}`, {
        ...values,
      });
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        { type: "info", description: "Task update successfully!" },
      ]);
    } catch (error) {
      console.log(error);
    }
    handleModal();
  };

  return (
    <div className="modal">
      <div className="title">
        <h2>Task edit</h2>
        <AiOutlineClose className="closeButton" onClick={handleModal} />
      </div>
      <div className="items">
        <p>ID:</p>
        <p>{id}</p>
      </div>
      <div className="items">
        <p>Name:</p>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChangeForm}
        />
      </div>
      <div className="items">
        <p>Completed: </p>
        <input
          type="checkbox"
          className="checkbox"
          checked={values.completed}
          onChange={handleCheckboxChange}
        />
      </div>
      <button className="submitButton" onClick={handleSave}>
        Save infos
      </button>
    </div>
  );
};
