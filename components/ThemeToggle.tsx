'use client'

import { useTheme } from '@/lib/theme-context'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors hover:bg-muted"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        // Moon icon for light mode
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        // Sun icon for dark mode
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm0 10a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 100-2 1 1 0 000 2zm0-6a1 1 0 011 1v2a1 1 0 11-2 0V5a1 1 0 011-1zm3.293 2.293a1 1 0 101.414-1.414l-1.414 1.414zm2.828 2.828a1 1 0 11-1.414 1.414l1.414-1.414zM5 10a1 1 0 11-2 0 1 1 0 012 0zm7-7a1 1 0 100-2 1 1 0 000 2zM2.707 12.293a1 1 0 101.414 1.414L2.707 12.293z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  )
}
