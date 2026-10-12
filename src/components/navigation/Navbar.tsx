import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Brand from '../ui/Brand'

const links = [
  { label: 'Features', href: '/#features' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'For institutions', href: '/#institutions' },
  { label: 'About', href: '/#about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigateTo = (href: string) => {
    setOpen(false)
    if (href.includes('#') && location.pathname === '/') {
      document.querySelector(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return (
    <header className="navbar">
      <div className="nav-inner container">
        <Brand />
        <nav className={`nav-links ${open ? 'nav-links-open' : ''}`} aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => navigateTo(link.href)}>{link.label}</a>
          ))}
          <div className="mobile-nav-actions">
            <Link className="button button-ghost" to="/login" onClick={() => setOpen(false)}>Log in</Link>
            <Link className="button button-primary" to="/register" onClick={() => setOpen(false)}>Get started <ArrowUpRight size={16} /></Link>
          </div>
        </nav>
        <div className="nav-actions">
          <Link className="nav-login" to="/login">Log in</Link>
          <Link className="button button-primary nav-cta" to="/register">Get started <ArrowUpRight size={16} /></Link>
        </div>
        <button className="menu-toggle" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}