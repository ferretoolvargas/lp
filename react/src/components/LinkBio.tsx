import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ButtonLink from './ButtonLink'
import { links, socialLinks } from '../data/content'

gsap.registerPlugin(useGSAP)

const asset = (name: string) => `${import.meta.env.BASE_URL}${name}`

export default function LinkBio({ isDark }: { isDark: boolean }) {
  const scope = useRef<HTMLElement>(null)

  useGSAP(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.bio-card', {
        opacity: 0,
        y: 26,
        scale: 0.97,
        duration: 0.8,
        ease: 'power3.out',
      })
      gsap.from('.brand-block > *', {
        opacity: 0,
        y: 12,
        duration: 0.55,
        stagger: 0.07,
        delay: 0.18,
        ease: 'power2.out',
      })
      gsap.from('.button-link', {
        opacity: 0,
        y: 16,
        duration: 0.5,
        stagger: 0.065,
        delay: 0.34,
        ease: 'power2.out',
      })
    })

    return () => media.revert()
  }, { scope })

  return (
    <section ref={scope} className="link-bio">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <article className="bio-card">
        <div className="brand-block">
          <img
            src={asset(isDark ? 'ftv-letras-fh-dark.png' : 'ftv-letras-fh-light.png')}
            alt="Ferretool Vargas — Ferretería y herramientas"
            className="brand-logo"
          />
          <p className="location"><i className="bi bi-geo-alt" aria-hidden="true" /> La Paz, Bolivia</p>

          <nav className="social-list" aria-label="Redes sociales">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.url} target="_blank" rel="noreferrer" className="social-link" aria-label={item.label}>
                <i className={`bi ${item.icon || ''}`} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>

        <div className="links" aria-label="Enlaces principales">
          {links.map((link) => <ButtonLink key={link.label} link={link} />)}
        </div>

      </article>
    </section>
  )
}
