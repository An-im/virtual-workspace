import { useState, useEffect, useRef } from 'react'
import { Timer } from 'lucide-react'

const WORK_TIME = 25 * 60 // 25 minutos en segundos

export default function PomodoroTimer() {
  const [secondsLeft, setSecondsLeft] = useState(WORK_TIME)
  const [isRunning, setIsRunning] = useState(false)
  const timerRef = useRef(null)

  const formatTime = (secs) => {
    const minutes = String(Math.floor(secs / 60)).padStart(2, '0')
    const seconds = String(secs % 60).padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSecondsLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current)
            setIsRunning(false)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => clearInterval(timerRef.current)
  }, [isRunning])

  const startTimer = () => {
    if (secondsLeft > 0) setIsRunning(true)
  }

  const pauseTimer = () => {
    setIsRunning(false)
    clearInterval(timerRef.current)
  }

  const resetTimer = () => {
    pauseTimer()
    setSecondsLeft(WORK_TIME)
  }

  return (
    <div className="bg-white rounded-lg shadow p-4 text-center">
      <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Timer className="w-5 h-5 text-blue-500" />
        Pomodoro Timer
      </h2>

      <div className="text-4xl font-mono text-blue-600 mb-4">
        {formatTime(secondsLeft)}
      </div>

      <div className="flex justify-center gap-2">
        {!isRunning ? (
          <button onClick={startTimer} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
            Start
          </button>
        ) : (
          <button onClick={pauseTimer} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
            Pause
          </button>
        )}
        <button onClick={resetTimer} className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500">
          Restart
        </button>
      </div>
    </div>
  )
}
