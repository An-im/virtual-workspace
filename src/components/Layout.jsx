export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600">Virtual Workspace</h1>
      </header>

      <main className="grid gap-6 max-w-6xl mx-auto">
        {/* Calendar y SummaryPanel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {children[0]} {/* Calendar */}
          {children[1]} {/* SummaryPanel */}
        </div>

        {/* To-Do List */}
        <div className="w-full">{children[2]}</div>

        {/* Sticky Notes y Pomodoro Timer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {children[3]} {/* StickyNotes */}
          {children[4]} {/* PomodoroTimer */}
        </div>
      </main>
    </div>
  )
}
