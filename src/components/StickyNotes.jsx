import { useState, useEffect } from 'react'
import { StickyNote } from 'lucide-react'

export default function StickyNotes() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('sticky-notes')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('sticky-notes', JSON.stringify(notes))
  }, [notes])

  const addNote = () => {
    const newNote = { id: Date.now(), content: '' }
    setNotes([newNote, ...notes])
  }

  const updateNote = (id, newContent) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, content: newContent } : note
    ))
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  return (
    <div className="bg-yellow-50 rounded-lg shadow p-4">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <StickyNote className="w-5 h-5 text-yellow-500" />
          Sticky Notes
        </h2>

      <button
        onClick={addNote}
        className="mb-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded hover:bg-yellow-300 transition"
      >
        + New Note
      </button>

      <div className="grid gap-4">
        {notes.map(note => (
          <div key={note.id} className="bg-yellow-100 p-3 rounded shadow-md relative">
            <textarea
              value={note.content}
              onChange={(e) => updateNote(note.id, e.target.value)}
              placeholder="Write something..."
              className="w-full h-24 p-2 rounded resize-none bg-yellow-50 text-gray-700 border border-yellow-300 focus:outline-none focus:ring focus:ring-yellow-400"
            />
            <button
              onClick={() => deleteNote(note.id)}
              className="absolute top-1 right-2 text-red-500 hover:text-red-700 text-sm"
              title="Eliminar"
            >
              ✕
            </button>
          </div>
        ))}
        {notes.length === 0 && (
          <p className="text-sm text-gray-500">No notes yet.</p>
        )}
      </div>
    </div>
  )
}
