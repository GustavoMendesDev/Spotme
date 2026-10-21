import styles from './Benefits.module.css'
import { Section } from '@/shared/ui/Section'
import { Container } from '@/shared/ui/Container'
import { BenefitCard, benefits } from '@/entities/benefit'

export const Benefits = () => {
  return (
    <Section id="beneficios">
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>Por que usar o SpotMe?</h2>
          <p className={styles.subtitle}>
            Tudo que você precisa pra treinar com mais segurança, motivação e diversão
          </p>
        </div>
        <div className={styles.grid}>
          {benefits.map(benefit => (
            <BenefitCard 
              key={benefit.id}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
