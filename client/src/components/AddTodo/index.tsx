import { IoIosAddCircle } from "react-icons/io"

import "./addTodo.styles.scss"
export const AddTodo = () => {
  return (
    <div className="addTodoContainer">
        <input type="text" className="input" />
        <IoIosAddCircle className="addIcon"/>
    </div>
  )
}
