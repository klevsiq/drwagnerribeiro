const WA = 'https://wa.me/5511999392941?text=Ol%C3%A1%2C%20Dr.%20Wagner!%20Vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20gratuita.'

const WppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function Hero() {
  return (
    <section className="hero" id="hero">

      {/* Gradiente radial de fundo — iluminação no lado esquerdo */}
      <div className="hero-glow" aria-hidden="true" />

      {/* Grade de pontos sutil */}
      <div className="hero-dots" aria-hidden="true" />

      {/* Balança da Justiça — lado direito */}
      <svg
        className="hero-scales"
        viewBox="0 0 440 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="scaleGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.22" />
            <stop offset="100%" stopColor="white" stopOpacity="0.04" />
          </linearGradient>
        </defs>
        <g stroke="url(#scaleGrad)" strokeLinecap="round" strokeLinejoin="round">
          {/* Argola superior */}
          <circle cx="220" cy="38" r="18" strokeWidth="2.2" />
          <line x1="220" y1="4" x2="220" y2="20" strokeWidth="2" />
          <line x1="204" y1="10" x2="220" y2="20" strokeWidth="1.5" />
          <line x1="236" y1="10" x2="220" y2="20" strokeWidth="1.5" />

          {/* Coluna central */}
          <line x1="220" y1="56" x2="220" y2="490" strokeWidth="3" />

          {/* Viga horizontal — levemente inclinada para dinamismo */}
          <line x1="28" y1="148" x2="412" y2="135" strokeWidth="2.8" />

          {/* Ponto de apoio central */}
          <circle cx="220" cy="141" r="7" strokeWidth="2.2" fill="rgba(255,255,255,0.06)" />

          {/* Corrente esquerda (tracejada para efeito de elo) */}
          <line x1="28" y1="148" x2="28" y2="305" strokeWidth="1.8" strokeDasharray="5,4.5" />

          {/* Prato esquerdo */}
          <path d="M -22,298 Q 28,368 78,298" strokeWidth="2.8" />
          <line x1="-22" y1="298" x2="78" y2="298" strokeWidth="1.6" strokeOpacity="0.5" />

          {/* Corrente direita */}
          <line x1="412" y1="135" x2="412" y2="318" strokeWidth="1.8" strokeDasharray="5,4.5" />

          {/* Prato direito */}
          <path d="M 362,312 Q 412,382 462,312" strokeWidth="2.8" />
          <line x1="362" y1="312" x2="462" y2="312" strokeWidth="1.6" strokeOpacity="0.5" />

          {/* Base */}
          <line x1="155" y1="490" x2="285" y2="490" strokeWidth="3.2" />
          {/* Pés da base */}
          <line x1="165" y1="490" x2="128" y2="516" strokeWidth="2.4" />
          <line x1="275" y1="490" x2="312" y2="516" strokeWidth="2.4" />
          {/* Barra horizontal dos pés */}
          <line x1="108" y1="516" x2="148" y2="516" strokeWidth="2" />
          <line x1="292" y1="516" x2="332" y2="516" strokeWidth="2" />
        </g>
      </svg>

      {/* Símbolo § marca d'água */}
      <div className="hero-paragraph" aria-hidden="true">§</div>

      <div className="hero-content">
        <div className="hero-badge">
          <span>OAB-SP 123.456</span>
        </div>
        <h1 className="hero-h1">
          Defendendo seus direitos<em> com expertise</em>
        </h1>
        <p className="hero-sub">
          15 anos protegendo trabalhadores, famílias e aposentados em São Paulo.
          Atendimento humanizado, consulta gratuita na primeira conversa.
        </p>
        <div className="hero-actions">
          <a href={WA} className="btn-gold" target="_blank" rel="noopener noreferrer">
            <WppIcon />
            Fale conosco
          </a>
          <a href="#servicos" className="hero-sec-link">
            Ver áreas de atuação
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <div className="scroll-bar" />
      </div>
    </section>
  )
}
