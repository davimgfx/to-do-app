import { Dispatch, SetStateAction, useState } from "react";
import { AddTodo, ToastNotifications, TodoList } from "../../components";
import type { messageType } from "../../components";
import "./MainLayout.styles.scss";

interface Notification {
  type: messageType;
  description: string;
}

export interface setNotificationProps {
  setNotifications: Dispatch<SetStateAction<Notification[]>>;
}

export const MainLayout = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  return (
    <>
      <div className="mainLayout">
        <h1>To-do Items</h1>
        <AddTodo setNotifications={setNotifications} />
        <TodoList setNotifications={setNotifications}/>
      </div>
      <div className="wrapper">
        {notifications.map((notification, index) => (
          <ToastNotifications
            key={index}
            type={notification.type}
            description={notification.description}
          />
        ))}
      </div>
    </>
  );
};
