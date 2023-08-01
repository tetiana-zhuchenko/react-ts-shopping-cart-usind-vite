import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from './Button'

type todosActionsPropsType = {
  resetTodos: () => void
  deleteCompletedTodos: () => void
  completedTodosExist: boolean
}

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}: todosActionsPropsType) {
  return (
    <>
      <Button
        title="Reset To-Dos"
        onClick={resetTodos}
        disabled={!!completedTodosExist}
      >
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed To-Dos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </>
  )
}

export default TodosActions
