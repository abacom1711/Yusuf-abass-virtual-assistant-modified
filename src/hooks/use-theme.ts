import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const stored = window.localStorage.getItem('va-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored === 'dark' || stored === 'light' ? stored : prefersDark ? 'dark' : 'light'
    setTheme(initial)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('va-theme', theme)
  }, [theme])

  return {
    theme,
    toggle: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
  }
}
