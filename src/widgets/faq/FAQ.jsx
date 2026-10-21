import styles from './FAQ.module.css'
import { Section } from '@/shared/ui/Section'
import { Container } from '@/shared/ui/Container'
import { Accordion } from '@/shared/ui/Accordion'
import { faqItems } from '@/entities/faq-item'

export const FAQ = () => {
  return (
    <Section id="faq">
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>Perguntas frequentes</h2>
          <p className={styles.subtitle}>Tire suas dúvidas sobre o SpotMe</p>
        </div>
        <div className={styles.accordionWrapper}>
          <Accordion items={faqItems} />
        </div>
      </Container>
    </Section>
  )
}
