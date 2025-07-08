import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-bold mb-4">Calendario</h2>

      <div className="flex flex-col gap-2 items-start">
        <label className="text-sm font-medium">Seleccioná una fecha:</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          dateFormat="dd/MM/yyyy"
        />
        <p className="text-sm text-gray-600">
          Fecha seleccionada: <span className="font-semibold">{selectedDate.toLocaleDateString()}</span>
        </p>
      </div>
    </div>
  )
}
