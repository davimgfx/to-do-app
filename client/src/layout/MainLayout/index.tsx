import { AddTodo, TodoItem } from "../../components";

import "./MainLayout.styles.scss"

export const MainLayout = () => {
  return (
    <div className="mainLayout">
      <h1>To-do Items</h1>
      <AddTodo />
      <TodoItem todoName="Do the homework" />
      <TodoItem todoName="Do the homework" />
      <TodoItem todoName="Do the homework" />
      <TodoItem todoName="Do the homework" />
      
    </div>
  );
};
