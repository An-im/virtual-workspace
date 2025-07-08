import './App.css'
import Layout from './components/Layout'
import ToDoList from './components/ToDoList'
import StickyNotes from './components/StickyNotes'
import Calendar from './components/Calendar'
import PomodoroTimer from './components/PomodoroTimer'

function App() {
  return (
    <Layout>
      <ToDoList />
      <StickyNotes />
      <Calendar/>
      <PomodoroTimer />
    </Layout>
  )
}


export default App
