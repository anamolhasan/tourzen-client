import React, { useContext } from 'react'
import { ThemeContext } from '../../provider/ThemeProvider'

const ThemeToggle = () => {
      const { theme, toggleTheme } = useContext(ThemeContext)
  return (
     <div className="text-center ">
      {/* <ThemeToggle /> */}

      {/* <p className="text-2xl mt-4">
        Current Theme: {theme === 'dark' ? ' Light Mode' : ' Dark Mode'}
      </p> */}

      <button
        className="w-full px-6 py-2 bg-primary text-white rounded"
        onClick={toggleTheme}
      >
        {theme === 'dark' ? '🌞Switch to Light mode' : '🌙 Switch to Dark mode'}
      </button>
    </div>
  )
}

export default ThemeToggle
