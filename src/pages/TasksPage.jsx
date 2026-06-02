import { useOutletContext } from 'react-router-dom'
import TodoList from './components/TodoList'

function TasksPage() {
  const { todos, handleDeleteTodo } = useOutletContext()

  const isEmpty = todos.length === 0

  return (
    <section className="todo-card page-content">
      <h2 className="section-title">Your Tasks</h2>
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        isEmpty={isEmpty}
        noSearchResults={false}
      />
    </section>
  )
}

export default TasksPage
