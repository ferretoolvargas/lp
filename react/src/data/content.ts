import { Link } from '../types'

const whatsappMessage = encodeURIComponent('Hola Ferretool Vargas, quisiera consultar por un producto.')

export const links: Link[] = [
  { label: 'Consultar por WhatsApp', url: `https://wa.me/59160514138?text=${whatsappMessage}`, icon: 'bi-whatsapp', highlight: true, kind: 'whatsapp' },
  { label: 'Página web', url: 'https://ferretoolvargas.github.io/web/', icon: 'bi-globe2', kind: 'website' },
  { label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61593272297661', icon: 'bi-facebook', social: true, kind: 'facebook' },
  { label: 'Instagram', url: 'https://www.instagram.com/ferretool.vargas/', icon: 'bi-instagram', social: true, kind: 'instagram' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@ferretool.vargas', icon: 'bi-tiktok', social: true, kind: 'tiktok' },
]

export const socialLinks = links.filter((link) => link.social)
