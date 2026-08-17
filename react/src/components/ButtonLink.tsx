import React from 'react'
import { Link as LinkType } from '../types'

export default function ButtonLink({ link }: { link: LinkType }) {
  if (link.disabled) {
    return (
      <span className="button-link button-link-disabled flex items-center justify-center gap-3 px-4 py-3 rounded-lg" aria-disabled="true">
        <i className={`bi ${link.icon || ''}`} />
        <span>{link.label}</span>
      </span>
    )
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className={`button-link flex items-center justify-center gap-3 px-4 py-3 rounded-lg transition transform ${link.highlight ? 'button-link-highlight' : ''} hover:scale-[1.02]`}
    >
      <i className={`bi ${link.icon || ''}`} />
      <span>{link.label}</span>
    </a>
  )
}
