import { useState } from 'react'
import styles from './TodoForm.module.css'

type TodoFormPropsType = {
  addTodo: (text: string) => void
}

function TodoForm({ addTodo }: TodoFormPropsType) {
  const [text, setText] = useState('')
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    addTodo(text)
    setText('')
  }
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default TodoForm
