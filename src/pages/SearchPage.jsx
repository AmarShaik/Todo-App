import { useOutletContext } from 'react-router-dom'
import TodoList from './components/TodoList'

function SearchPage() {
  const { todos, search, setSearch, handleDeleteTodo } = useOutletContext()

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  )

  const hasSearch = search.trim().length > 0
  const isEmpty = todos.length === 0
  const noSearchResults = hasSearch && filteredTodos.length === 0 && !isEmpty

  return (
    <section className="todo-card page-content">
      <h2 className="section-title">Search Tasks</h2>
      <p className="page-text">Enter task by name</p>
      <input
        type="text"
        placeholder="Type to search your tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="search-results">
        <h3 className="results-heading">Results</h3>
        <TodoList
          todos={filteredTodos}
          onDelete={handleDeleteTodo}
          isEmpty={isEmpty}
          noSearchResults={noSearchResults}
          emptySearchHint={!hasSearch && !isEmpty}
        />
      </div>
    </section>
  )
}

export default SearchPage
