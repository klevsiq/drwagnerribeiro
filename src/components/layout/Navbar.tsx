import { useEffect, useRef, useState } from 'react'

const WA = 'https://wa.me/5511999392941?text=Ol%C3%A1%2C%20Dr.%20Wagner!%20Vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20gratuita.'

interface NavbarProps { onHeightChange: (h: number) => void }

export default function Navbar({ onHeightChange }: NavbarProps) {
  const navRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const measure = () => { if (navRef.current) onHeightChange(navRef.current.offsetHeight) }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [onHeightChange])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    const onOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onOutside)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onOutside)
    }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <nav id="nav" ref={navRef}>
      <a href="#" className="nb">
        <div className="nb-name">Dr. Wagner Ribeiro</div>
        <div className="nb-sub">OAB-SP 123.456 · Advogado</div>
      </a>
      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        aria-label="Menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(v => !v)}
      >
        <span /><span /><span />
      </button>

      <div className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <a href="#servicos"     className="mn-link" onClick={close}>Áreas de Atuação</a>
        <a href="#profissional" className="mn-link" onClick={close}>O Advogado</a>
        <div className="mn-sep" />
        <a href="#depoimentos"  className="mn-link" onClick={close}>Depoimentos</a>
        <a href="#contato"      className="mn-link" onClick={close}>Contato</a>
        <a href={WA} className="mn-cta" target="_blank" rel="noopener noreferrer" onClick={close}>
          Fale conosco
        </a>
      </div>
    </nav>
  )
}
