import { useInView } from '@/hooks/useInView'

export default function Professional() {
  const { ref: headerRef, inView: headerIn } = useInView<HTMLDivElement>()
  const { ref: contentRef, inView: contentIn } = useInView<HTMLDivElement>()

  return (
    <section className="profissional" id="profissional">
      <div className={`prof-header reveal${headerIn ? ' on' : ''}`} ref={headerRef}>
        <div className="eyebrow about-eyebrow"><span>O Advogado</span></div>
        <h2 className="sh">Dr. Wagner Ribeiro,<br /><em>OAB-SP 123.456</em></h2>
      </div>

      <div className="prof-grid">
        {/* Placeholder visual quando não há foto */}
        <div className="prof-photo reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="prof-photo-main" style={{ background: 'var(--ink3)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
            <div style={{ textAlign: 'center', opacity: 0.4 }}>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <p style={{ fontSize: '0.75rem', marginTop: '8px' }}>Foto do Dr. Wagner</p>
            </div>
          </div>
        </div>

        <div className={`prof-content reveal d2${contentIn ? ' on' : ''}`} ref={contentRef}>
          <div className="prof-body">
            <p>
              Com 15 anos de experiência dedicados ao Direito, o Dr. Wagner Ribeiro construiu
              uma sólida trajetória defendendo trabalhadores, famílias e aposentados em São Paulo.
              Formado pela Universidade de São Paulo (USP), referência de excelência jurídica no Brasil.
            </p>
            <p>
              Especialista em Direito Trabalhista, atua com profundo conhecimento técnico e
              estratégia personalizada para cada caso. Sua abordagem humanizada e próxima do
              cliente garante transparência em todas as etapas do processo.
            </p>
            <p>
              Acredita que todo cidadão merece uma defesa qualificada. Por isso, oferece
              primeira consulta gratuita e atendimento direto — sem intermediários, com o
              compromisso de estar ao seu lado do início ao fim.
            </p>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { num: '15+', label: 'Anos de Experiência' },
              { num: 'USP', label: 'Formação' },
              { num: '3', label: 'Especialidades' },
            ].map(item => (
              <div key={item.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', fontFamily: 'var(--serif)', color: 'var(--gold)', fontWeight: 700 }}>{item.num}</div>
                <div style={{ fontSize: '0.75rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
