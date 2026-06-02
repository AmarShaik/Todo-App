import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './TodoPage.css'

function Layout({ totalTasks, outletContext }) {
  return (
    <div className="todo-page">
      <Navbar totalTasks={totalTasks} />
      <main className="todo-main">
        <Outlet context={outletContext} />
      </main>
    </div>
  )
}

export default Layout
