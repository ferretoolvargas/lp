import LinkBio from './components/LinkBio'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { toggle, isDark } = useTheme()

  return (
    <main className="app-shell">
      <button
        type="button"
        onClick={toggle}
        className="theme-toggle"
        aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
        title={isDark ? 'Modo claro' : 'Modo oscuro'}
      >
        <i className={`bi ${isDark ? 'bi-sun' : 'bi-moon-stars'}`} aria-hidden="true" />
      </button>
      <LinkBio isDark={isDark} />
    </main>
  )
}
