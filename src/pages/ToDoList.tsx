import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import '../App.css'
import TodoList from '../components/Todos/TodoList'
import TodoForm from '../components/Todos/TodoForm'
import TodosActions from '../components/Todos/TodosActions'

export type myTodoType = {
  text: string
  isCompleted: boolean
  id: string
}

export function ToDoList() {
  const [todos, setTodos] = useState<myTodoType[]>([])

  const addTodoHandler = (text: string) => {
    const newTodo: myTodoType = { text: text, isCompleted: false, id: uuidv4() }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id: string) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id
      })
    )
  }

  const toggleTodoHandler = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  const resetTodoHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todos.length > 0 && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodoHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h5>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h5>
      )}
    </div>
  )
}
