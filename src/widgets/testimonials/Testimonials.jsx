import styles from './Testimonials.module.css'
import { Section } from '@/shared/ui/Section'
import { Container } from '@/shared/ui/Container'
import { TestimonialCard, testimonials, impactNumbers } from '@/entities/testimonial'

export const Testimonials = () => {
  return (
    <Section id="depoimentos">
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>Quem usa, ama</h2>
          <p className={styles.subtitle}>Veja o que a galera tá falando do SpotMe</p>
        </div>
        
        <div className={styles.numbers}>
          {impactNumbers.map((num, index) => (
            <div key={index} className={styles.numberCard}>
              <div className={styles.numberValue}>{num.value}</div>
              <div className={styles.numberLabel}>{num.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          {testimonials.map(testimonial => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              gym={testimonial.gym}
              rating={testimonial.rating}
              text={testimonial.text}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
