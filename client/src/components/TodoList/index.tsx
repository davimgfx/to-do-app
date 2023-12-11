"use client";
import { useEffect, useState } from "react";
import { ToastNotifications, TodoItem } from "..";
import Tasks from "../../api/Tasks";
import "./todoList.styles.scss";
interface TaskProps {
  name: string;
  _id: string;
  completed: boolean;
}

export const TodoList = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [deletedTaskIds, setDeletedTaskIds] = useState<string[]>([]);

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
      setDeletedTaskIds((prevIds) => [...prevIds, id]); 
    } catch (error) {
      console.log(error);
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
      <div className="wrapper">
        {deletedTaskIds.map((taskId) => (
          <ToastNotifications key={taskId} type="success" />
        ))}
      </div>
    </>
  );
};
