import { Link, useOutletContext } from 'react-router-dom'

function HomePage() {
  const { todos } = useOutletContext()

  return (
    <section className="todo-card page-content">
      <h2 className="section-title">Welcome</h2>
      <p className="page-text">
        Welcome to <strong>My Todo App</strong>.
      </p>
      <div className="home-stats">
        <p>
          You have <strong>{todos.length}</strong>{' '}
          {todos.length === 1 ? 'task' : 'tasks'} in total.
        </p>
      </div>
      <div className="home-links">
        <Link to="/add" className="home-link-btn">
          Add a Task
        </Link>
        <Link to="/search" className="home-link-btn home-link-btn-secondary">
          Search Tasks
        </Link>
        <Link to="/tasks" className="home-link-btn home-link-btn-secondary">
          View All Tasks
        </Link>
      </div>
    </section>
  )
}

export default HomePage
