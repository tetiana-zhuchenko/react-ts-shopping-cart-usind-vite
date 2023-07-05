import Todo from './Todo'
import styles from './TodoList.module.css'
import { myTodoType } from '../../pages/ToDoList'

type todoListPropsType = {
  todos: myTodoType[]
  deleteTodo: (id: string) => void
  toggleTodo: (id: string) => void
}

function TodoList({ todos, deleteTodo, toggleTodo }: todoListPropsType) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        )
      })}
    </div>
  )
}

export default TodoList
