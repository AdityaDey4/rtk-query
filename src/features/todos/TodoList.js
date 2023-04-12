import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const TodoList = () => {
    
    const [newTodo, setNewTodo] = useState("");
    const handleSubmit = (e)=> {
        e.preventDefault();
        setNewTodo("");
    }

    const newItemSelector = 
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">Enter a new To-Do item</label>
            <div className="new-todo">

                <input
                    type = "text"
                    id="new-todo"
                    value={newTodo}
                    onChange={(e)=> setNewTodo(e.target.value)}
                    placeholder="Enter a new todo"
                />
            </div>
            <button className="submit">
                <FontAwesomeIcon icon={faUpload} />
            </button>
        </form>

    let content;
  return (
    
        <main>
            <h1>Todo List</h1>
            {newItemSelector}
            {content}
        </main>
  )
}

export default TodoList