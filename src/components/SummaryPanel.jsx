import { useEffect, useState } from 'react'
import { useDate } from '../context/DateContext'

export default function SummaryPanel() {
  const { selectedDateString } = useDate()
  const [taskStats, setTaskStats] = useState({ total: 0, done: 0 })
  const [pomodoroCount, setPomodoroCount] = useState(0)

  const updateSummary = () => {
    const storedTasks = localStorage.getItem(`todo-${selectedDateString}`)
    const tasks = storedTasks ? JSON.parse(storedTasks) : []
    const done = tasks.filter(task => task.done).length
    const total = tasks.length
    setTaskStats({ total, done })

    const pomodoroData = JSON.parse(localStorage.getItem('pomodoro-sessions')) || {}
    setPomodoroCount(pomodoroData[selectedDateString] || 0)
  }

  useEffect(() => {
    updateSummary()

    // 🔁 Escuchar eventos desde ToDoList y Pomodoro
    window.addEventListener('tasks-updated', updateSummary)
    window.addEventListener('pomodoro-updated', updateSummary)

    return () => {
      window.removeEventListener('tasks-updated', updateSummary)
      window.removeEventListener('pomodoro-updated', updateSummary)
    }
  }, [selectedDateString])

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-bold mb-4">Daily Summary</h2>
      <ul className="text-sm space-y-2 text-gray-700">
        <li>
          
            📝 Tasks completed <strong>{taskStats.done}</strong>
          
        </li>
        <li>
          ⏱ Pomodoro sessions: <strong>{pomodoroCount}</strong>
        </li>
      </ul>
    </div>
  )
}
