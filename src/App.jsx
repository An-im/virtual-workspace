import './App.css'
import Layout from './components/Layout'
import ToDoList from './components/ToDoList'
import StickyNotes from './components/StickyNotes'
import Calendar from './components/Calendar'
import PomodoroTimer from './components/PomodoroTimer'
import SummaryPanel from './components/SummaryPanel'

function App() {
  return (
    <Layout>
      <Calendar />
      <SummaryPanel />
      <ToDoList />
      <StickyNotes />
      <PomodoroTimer />
    </Layout>
  )
}
export default App
