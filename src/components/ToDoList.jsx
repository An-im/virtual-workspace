import { useState, useEffect } from 'react'
import { ListTodo } from 'lucide-react'

export default function ToDoList() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('todo-tasks')
    return stored ? JSON.parse(stored) : []
  })
  const [newTask, setNewTask] = useState('')

  useEffect(() => {
    localStorage.setItem('todo-tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (newTask.trim() === '') return
    const newItem = { id: Date.now(), text: newTask, done: false }
    setTasks([newItem, ...tasks])
    setNewTask('')
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (  
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
        <ListTodo className="w-5 h-5 text-blue-500" />
        To Do List
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 mb-4">
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Add a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map(task => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-gray-50 p-2 rounded border border-gray-200"
          >
            <span
              className={`flex-1 cursor-pointer ${task.done ? 'line-through text-gray-400' : ''}`}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700 transition"
            >
              ✕
            </button>
          </li>
        ))}
        {tasks.length === 0 && (
          <li className="text-sm text-gray-500">No tasks yet.</li>
        )}
      </ul>
    </div>
  )
}
