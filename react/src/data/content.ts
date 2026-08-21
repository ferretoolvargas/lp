import { Link } from '../types'

const whatsappMessage = encodeURIComponent('Hola Ferretool Vargas, quisiera consultar por un producto.')

export const links: Link[] = [
  { label: 'Consultar por WhatsApp', url: `https://wa.me/59160514138?text=${whatsappMessage}`, icon: 'bi-whatsapp', highlight: true },
  { label: 'Correo', url: 'mailto:ferretool.vargas@gmail.com', icon: 'bi-envelope', social: true },
  { label: 'Facebook · Próximamente', url: '', icon: 'bi-facebook', social: true, disabled: true },
  { label: 'Instagram', url: 'https://www.instagram.com/ferretool.vargas/', icon: 'bi-instagram', social: true },
  { label: 'TikTok', url: 'https://www.tiktok.com/@ferretool.vargas', icon: 'bi-tiktok', social: true },
]
