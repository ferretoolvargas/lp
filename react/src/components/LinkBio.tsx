import ButtonLink from './ButtonLink'
import { links } from '../data/content'

const asset = (name: string) => `${import.meta.env.BASE_URL}${name}`

export default function LinkBio({ isDark }: { isDark: boolean }) {
  const social = links.filter((link) => link.social)
  return (
    <section className="link-bio">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <article className="bio-card">
        <div className="brand-block">
          <img src={asset(isDark ? 'ftv-letras-fh-dark.png' : 'ftv-letras-fh-light.png')} alt="Ferretool Vargas — Ferretería y herramientas" className="brand-logo" />
          <p className="location"><i className="bi bi-geo-alt" aria-hidden="true" /> La Paz, Bolivia</p>
          <nav className="social-list" aria-label="Redes sociales">
            {social.map((item) => item.disabled ? (
              <span key={item.label} className="social-link social-link-disabled" aria-label={`${item.label}, próximamente`} title="Próximamente"><i className={`bi ${item.icon || ''}`} /></span>
            ) : (
              <a key={item.label} href={item.url} target="_blank" rel="noreferrer" className="social-link" aria-label={item.label}><i className={`bi ${item.icon || ''}`} /></a>
            ))}
          </nav>
        </div>
        <div className="links" aria-label="Enlaces principales">{links.map((link) => <ButtonLink key={link.label} link={link} />)}</div>
      </article>
    </section>
  )
}
