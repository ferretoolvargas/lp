import LinkBio from './components/LinkBio'
import Stats from './components/Stats'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { toggle, isDark } = useTheme()
  return (
    <div>
      <header className="theme-header p-4 flex justify-end">
        <button type="button" onClick={toggle} className="theme-toggle px-3 py-1 rounded" aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'} title={isDark ? 'Modo claro' : 'Modo oscuro'}>
          <span aria-hidden="true">{isDark ? '☀️' : '🌙'}</span>
        </button>
      </header>
      <main><LinkBio isDark={isDark} /><Stats /></main>
    </div>
  )
}
