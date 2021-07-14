import { Children, createContext, useContext } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  let state = 'abc'
  return (
    <ThemeContext.Provider value={{ state }}>{children}</ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
