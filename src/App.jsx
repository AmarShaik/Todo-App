import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import AddTaskPage from './pages/AddTaskPage'
import SearchPage from './pages/SearchPage'
import TasksPage from './pages/TasksPage'

const API_URL = 'https://jsonplaceholder.typicode.com/todos'

function App() {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .catch((err) => console.error('Failed to load todos from API:', err))
  }, [])

  const handleAddTodo = () => {
    const trimmed = task.trim()
    if (!trimmed) return

    const newTodo = {
      id: Date.now(),
      title: trimmed,
      completed: false,
    }
    setTodos((prev) => [newTodo, ...prev])
    setTask('')
  }

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const outletContext = {
    todos,
    task,
    setTask,
    search,
    setSearch,
    handleAddTodo,
    handleDeleteTodo,
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Layout totalTasks={todos.length} outletContext={outletContext} />}
        >
          <Route index element={<HomePage />} />
          <Route path="add" element={<AddTaskPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="tasks" element={<TasksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
