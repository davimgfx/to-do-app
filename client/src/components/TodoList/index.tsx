import { useEffect, useState } from "react";
import { TodoItem } from "..";
import Tasks from "../../api/Tasks";
import "./todoList.styles.scss";
import { setNotificationProps } from "../../layout/MainLayout";
interface TaskProps {
  name: string;
  _id: string;
  completed: boolean;
}

export const TodoList = ({ setNotifications } : setNotificationProps) => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Tasks.get("/");
        setTasks(response.data.tasks);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [tasks]);

  const handleDeleteTask = async (id: string) => {
    try {
      await Tasks.delete(`/${id}`);
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        { type: "success", description: "Task remove successfully!" },
      ]);
    } catch (error) {
      console.log(error);
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        { type: "error", description: "Something is wrong!" },
      ]);
    }
  };

  return (
    <>
      <div className="todoListContainer">
        {tasks &&
          tasks.map((task) => (
            <TodoItem
              todoName={task.name}
              key={task._id}
              done={task.completed}
              id={task._id}
              onDelete={() => handleDeleteTask(task._id)}
            />
          ))}
      </div>
    </>
  );
};
