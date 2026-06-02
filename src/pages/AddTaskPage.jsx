import { useOutletContext } from 'react-router-dom'
import TodoForm from './components/TodoForm'

function AddTaskPage() {
  const { task, setTask, handleAddTodo } = useOutletContext()

  return (
    <section className="todo-card page-content">
      <h2 className="section-title">Add Task</h2>
      <p className="page-text">Enter a task name and click Add Task to save it.</p>
      <TodoForm task={task} onTaskChange={setTask} onSubmit={handleAddTodo} />
    </section>
  )
}

export default AddTaskPage
