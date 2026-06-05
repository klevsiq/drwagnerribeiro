import { useInView } from '@/hooks/useInView'

interface AreaData {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  delay?: string
}

const ScalesIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18M3 9l9-6 9 6M5 9L2 21h20L17 9M5 9h14" />
  </svg>
)

const FamilyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21v-4a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v4" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const ShieldIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
)

const areas: AreaData[] = [
  {
    id: 'area-trabalhista',
    name: 'Direito Trabalhista',
    description: 'Demissão sem justa causa, verbas rescisórias, horas extras não pagas, assédio moral e reconhecimento de vínculo. Defenda seus direitos com quem entende do assunto.',
    icon: <ScalesIcon />,
  },
  {
    id: 'area-familia',
    name: 'Direito de Família',
    description: 'Divórcio, guarda e visitação de filhos, pensão alimentícia, inventário e partilha de bens. Cuidamos de momentos sensíveis com respeito, agilidade e discrição.',
    icon: <FamilyIcon />,
    delay: 'd2',
  },
  {
    id: 'area-previdenciario',
    name: 'Direito Previdenciário',
    description: 'Aposentadoria, benefício por incapacidade, revisão de benefícios do INSS e recursos administrativos. Conquiste o que é seu por direito.',
    icon: <ShieldIcon />,
    delay: 'd3',
  },
]

const WA = 'https://wa.me/5511999392941?text=Ol%C3%A1%2C%20Dr.%20Wagner!%20Vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20gratuita.'

function AreaCard({ area }: { area: AreaData }) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`svc2-card reveal${area.delay ? ' ' + area.delay : ''}${inView ? ' on' : ''}`}
      id={area.id}
    >
      <div className="svc2-icon">{area.icon}</div>
      <h3 className="svc2-name">{area.name}</h3>
      <p className="svc2-desc">{area.description}</p>
    </div>
  )
}

export default function Services() {
  const { ref: headerRef, inView: headerIn } = useInView<HTMLDivElement>()

  return (
    <section className="services2" id="servicos">
      <div className="services2-inner">
        <div className={`svc2-header reveal${headerIn ? ' on' : ''}`} ref={headerRef}>
          <div className="eyebrow"><span>Áreas de Atuação</span></div>
          <h2 className="sh">Expertise jurídica<em> a seu serviço</em></h2>
          <p className="sp">
            Cada caso é tratado com atenção individual e estratégia personalizada para o melhor resultado.
          </p>
        </div>

        <div className="svc2-grid">
          {areas.map(area => <AreaCard key={area.id} area={area} />)}
        </div>

        <div className="svc2-cta">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Fale conosco
          </a>
          <span className="svc2-note">Primeira consulta gratuita · Atendimento rápido pelo WhatsApp</span>
        </div>
      </div>
    </section>
  )
}
