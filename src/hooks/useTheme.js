import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'
const systemQuery = '(prefers-color-scheme: dark)'

function readStored() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'dark' || value === 'light' ? value : null
  } catch {
    return null
  }
}

// Theme follows the system until the visitor picks one; the pick is persisted.
export function useTheme() {
  const [theme, setTheme] = useState(
    () => readStored() ?? (window.matchMedia(systemQuery).matches ? 'dark' : 'light'),
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia(systemQuery)
    const onChange = (event) => {
      if (!readStored()) setTheme(event.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // Storage unavailable (private mode) - the choice lasts for this visit only.
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
