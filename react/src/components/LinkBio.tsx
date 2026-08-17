import ButtonLink from './ButtonLink'
import { links } from '../data/content'
import profileImage from '../assets/foto-perfil.jpg'
import logoDark from '../assets/ftv-letras-fh-dark.png'
import logoLight from '../assets/ftv-letras-fh-light.png'

export default function LinkBio({ isDark }: { isDark: boolean }) {
  const social = links.filter((link) => link.social)
  return (
    <div className="link-bio min-h-screen flex items-center justify-center bg-center bg-cover p-6" style={{ backgroundImage: `url(${profileImage})` }}>
      <div className="bio-card w-full max-w-md rounded-2xl overflow-hidden card-custom">
        <div className="relative header">
          <img src={isDark ? logoDark : logoLight} alt="Ferretools Vargas" className="w-full object-contain header-img" />
          <div className="overlay text-center">
            <h5 className="brand-name font-bold text-2xl">FERRETOOLS VARGAS</h5>
            <small className="tagline block">Herramientas para cada proyecto</small>
            <div className="flex justify-center gap-3 mt-3">
              {social.map((item) => item.disabled ? (
                <span key={item.label} className="social-link social-link-disabled text-2xl" aria-label="Facebook próximamente" title="Facebook próximamente"><i className={`bi ${item.icon || ''}`} /></span>
              ) : (
                <a key={item.label} href={item.url} target="_blank" rel="noreferrer" className="social-link text-2xl hover:scale-110 transition" aria-label={item.label}><i className={`bi ${item.icon || ''}`} /></a>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 links flex flex-col gap-3">{links.map((link) => <ButtonLink key={link.label} link={link} />)}</div>
      </div>
    </div>
  )
}
