import { NavLink, Link } from 'react-router-dom'

function Navbar({ totalTasks }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <span className="navbar-logo" aria-hidden="true">
            ✓
          </span>
          <div>
            <h1>My Todo App</h1>
            <p className="navbar-tagline">Stay organized, one task at a time</p>
          </div>
        </Link>

        <nav className="navbar-links" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/add" className={({ isActive }) => (isActive ? 'active' : '')}>
            Add Task
          </NavLink>
          <NavLink to="/search" className={({ isActive }) => (isActive ? 'active' : '')}>
            Search
          </NavLink>
          <NavLink to="/tasks" className={({ isActive }) => (isActive ? 'active' : '')}>
            Tasks
          </NavLink>
        </nav>

        <div className="navbar-stats">
          <span className="stat-badge">
            {totalTasks} {totalTasks === 1 ? 'Task' : 'Tasks'}
          </span>
        </div>
      </div>
    </header>
  )
}

export default Navbar
