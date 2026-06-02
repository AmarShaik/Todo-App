function TodoForm({ task, onTaskChange, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Enter a task name..."
        value={task}
        onChange={(e) => onTaskChange(e.target.value)}
      />
      <button type="submit" className="btn-add">
        Add Task
      </button>
    </form>
  )
}

export default TodoForm
