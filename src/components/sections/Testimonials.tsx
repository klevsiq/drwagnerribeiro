import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useInView } from '@/hooks/useInView'

interface Testimonial {
  name: string
  initial: string
  meta: string
  service: string
  text: string
  featured?: boolean
}

const testimonials: Testimonial[] = [
  {
    name: 'Carlos Eduardo Silva',
    initial: 'C',
    meta: 'Cliente — Direito Trabalhista',
    service: 'Rescisão Indireta',
    text: '"Fui demitido de forma irregular após 8 anos de empresa. O Dr. Wagner analisou meu caso com cuidado, explicou cada etapa e conseguiu um resultado muito acima do que eu esperava. Profissional competente e humano."',
    featured: true,
  },
  {
    name: 'Ana Paula Mendes',
    initial: 'A',
    meta: 'Cliente — Direito de Família',
    service: 'Divórcio e Guarda',
    text: '"Passei por um momento muito difícil e o Dr. Wagner me tratou com respeito e empatia do início ao fim. Ele resolveu a questão da guarda dos meus filhos com agilidade e profissionalismo. Recomendo muito."',
  },
  {
    name: 'Roberto Almeida',
    initial: 'R',
    meta: 'Cliente — Direito Previdenciário',
    service: 'Aposentadoria INSS',
    text: '"Tentei minha aposentadoria sozinho por dois anos sem sucesso. O Dr. Wagner resolveu em poucos meses. Explica tudo com clareza, é super atencioso e realmente conhece a legislação previdenciária a fundo."',
  },
  {
    name: 'Fernanda Rocha',
    initial: 'F',
    meta: 'Cliente — Direito Trabalhista',
    service: 'Horas Extras',
    text: '"Trabalhei anos fazendo horas extras sem receber. O escritório do Dr. Wagner cuidou de tudo, desde a documentação até a audiência. Vitória garantida e atendimento de primeira. Muito obrigada!"',
  },
]

const REVIEW_URL = 'https://www.google.com/maps/search/Dr.+Wagner+Ribeiro+Advogado+São+Paulo'

export default function Testimonials() {
  const { ref: headRef, inView: headIn } = useInView<HTMLDivElement>()
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true, dragFree: false })
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIdx(emblaApi.selectedScrollSnap())
    setCanPrev(emblaApi.canScrollPrev())
    setCanNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => { emblaApi.off('select', onSelect); emblaApi.off('reInit', onSelect) }
  }, [emblaApi, onSelect])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <section className="testi" id="depoimentos">
      <div className="testi-inner">
        <div className={`testi-head reveal${headIn ? ' on' : ''}`} ref={headRef}>
          <div>
            <div className="eyebrow"><span>Depoimentos</span></div>
            <h2 className="sh">
              Clientes que conquistaram<br />
              <em>seus direitos.</em>
            </h2>
          </div>
          <div className="testi-score">
            <div className="ts-num">5.0</div>
            <div className="ts-lbl">Avaliação média</div>
            <div className="ts-stars">★★★★★</div>
          </div>
        </div>

        <div className="t-carousel-wrap">
          <div className="t-embla-viewport" ref={emblaRef}>
            <div className="t-grid">
              {testimonials.map((t, i) => (
                <div key={i} className={`t-card${t.featured ? ' feat' : ''}`}>
                  <div className="t-top">
                    <div className="t-stars">★★★★★</div>
                  </div>
                  <p className="t-text">{t.text}</p>
                  <div className="t-author">
                    <div className="t-avatar">{t.initial}</div>
                    <div>
                      <div className="t-name">{t.name}</div>
                      <div className="t-meta">{t.meta}</div>
                      <div className="t-svc">{t.service}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="t-nav">
          <button className="t-nav-btn" onClick={scrollPrev} disabled={!canPrev} aria-label="Anterior">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button className="t-nav-btn" onClick={scrollNext} disabled={!canNext} aria-label="Próximo">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
          </button>
          <div className="t-dots" role="tablist">
            {scrollSnaps.map((_, i) => (
              <button key={i} className={`t-dot${i === selectedIdx ? ' on' : ''}`} onClick={() => emblaApi?.scrollTo(i)} role="tab" aria-selected={i === selectedIdx} aria-label={`Grupo ${i + 1}`} />
            ))}
          </div>
        </div>

        <div className="testi-foot">
          <a href={REVIEW_URL} target="_blank" rel="noopener noreferrer" className="sf-google">
            Ver mais avaliações
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
