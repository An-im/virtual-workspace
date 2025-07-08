import { createContext, useContext, useState } from 'react'

const DateContext = createContext()

export const DateProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(() => new Date())

  const getDateString = (date) => date.toISOString().split('T')[0]

  return (
    <DateContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        selectedDateString: getDateString(selectedDate),
      }}
    >
      {children}
    </DateContext.Provider>
  )
}

export const useDate = () => useContext(DateContext)
