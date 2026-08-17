import { Link } from '../types'

const whatsappMessage = encodeURIComponent('Hola Ferretools Vargas, quisiera consultar por un producto.')

export const links: Link[] = [
  { label: 'Consultar por WhatsApp', url: `https://wa.me/59160514138?text=${whatsappMessage}`, icon: 'bi-whatsapp', highlight: true },
  { label: 'Correo', url: 'mailto:ferretools.vargas@gmail.com', icon: 'bi-envelope', social: true },
  { label: 'Facebook · Próximamente', url: '', icon: 'bi-facebook', social: true, disabled: true },
  { label: 'Instagram', url: 'https://www.instagram.com/ferretools.vargas/', icon: 'bi-instagram', social: true },
  { label: 'TikTok', url: 'https://www.tiktok.com/@ferretools.vargas', icon: 'bi-tiktok', social: true },
]
