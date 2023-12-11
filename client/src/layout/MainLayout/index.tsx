import { AddTodo, TodoList } from "../../components";

import "./MainLayout.styles.scss"

export const MainLayout = () => {
  return (
    <div className="mainLayout">
      <h1>To-do Items</h1>
      <AddTodo />
      <TodoList/>
   
      
    </div>
  );
};
