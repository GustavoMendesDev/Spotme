import styles from './Pricing.module.css'
import { Section } from '@/shared/ui/Section'
import { Container } from '@/shared/ui/Container'
import { PlanCard, plans } from '@/entities/plan'

export const Pricing = () => {
  return (
    <Section id="planos">
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>Escolha seu plano</h2>
          <p className={styles.subtitle}>Comece grátis e evolua quando quiser</p>
        </div>
        <div className={styles.grid}>
          {plans.map(plan => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
