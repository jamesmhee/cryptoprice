import React, { useState, useEffect } from 'react'

function getInitialTheme(){
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('theme')
    if (typeof storedPrefs === 'string') {
      return storedPrefs
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
    if (userMedia.matches) {
      return 'dark'
    }
  }

  // If you want to use light theme as the default, return "light" instead
  return 'light'
}

export const ThemeContext = React.createContext({})

function ThemeProvider({ initialTheme, children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => rawSetTheme(theme), [theme])

  const rawSetTheme = (theme) => {
    const root = window.document.documentElement
    const isDark = theme === 'dark'
    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }

  if (initialTheme) {
    rawSetTheme(initialTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider