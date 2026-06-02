function TodoList({
  todos,
  onDelete,
  isEmpty,
  noSearchResults,
  emptySearchHint,
}) {
  if (isEmpty) {
    return (
      <p className="empty-message">
        No tasks yet. Go to Add Task to create your first one
      </p>
    )
  }

  if (emptySearchHint) {
    return (
      <p className="empty-message">
        Your tasks appear here
      </p>
    )
  }

  if (noSearchResults) {
    return (
      <p className="empty-message">
        No tasks match your search. Try a different keyword
      </p>
    )
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <span className="todo-title">{todo.title}</span>
          <button
            type="button"
            className="btn-delete"
            onClick={() => onDelete(todo.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
