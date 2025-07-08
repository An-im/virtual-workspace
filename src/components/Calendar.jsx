import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { CalendarDays } from 'lucide-react'

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div className="bg-white rounded-lg shadow p-4 max-w-[400px] mx-auto w-full">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <CalendarDays className="w-5 h-5 text-blue-500" />
          Calendar
        </h2>
      <div className="flex flex-col gap-2 items-start">
        <label className="text-sm font-medium">Select a date:</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          dateFormat="dd/MM/yyyy"
        />
        <p className="text-sm text-gray-600">
          Select a date: <span className="font-semibold">{selectedDate.toLocaleDateString()}</span>
        </p>
      </div>
    </div>
  )
}
