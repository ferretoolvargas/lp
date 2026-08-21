import LinkBio from './components/LinkBio'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { toggle, isDark } = useTheme()
  return (
    <div className="app-shell">
      <header className="theme-header">
        <button type="button" onClick={toggle} className="theme-toggle" aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'} title={isDark ? 'Modo claro' : 'Modo oscuro'}>
          <span aria-hidden="true">{isDark ? '☀️' : '🌙'}</span>
        </button>
      </header>
      <main><LinkBio isDark={isDark} /></main>
    </div>
  )
}
