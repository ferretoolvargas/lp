import { Link as LinkType } from '../types'

export default function ButtonLink({ link }: { link: LinkType }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className={`button-link ${link.highlight ? 'button-link-highlight' : ''}`}
      aria-label={`Abrir ${link.label}`}
    >
      <span className="button-icon"><i className={`bi ${link.icon || ''}`} aria-hidden="true" /></span>
      <span className="button-label">{link.label}</span>
      <i className="bi bi-arrow-up-right button-arrow" aria-hidden="true" />
    </a>
  )
}
