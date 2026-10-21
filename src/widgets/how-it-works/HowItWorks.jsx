import styles from './HowItWorks.module.css'
import { Section } from '@/shared/ui/Section'
import { Container } from '@/shared/ui/Container'
import { Icon } from '@/shared/ui/Icon'

const steps = [
  {
    number: 1,
    title: 'Cadastre-se',
    description: 'Entre na lista de espera com seu nome, e-mail e academia'
  },
  {
    number: 2,
    title: 'Crie seu perfil',
    description: 'Coloque seu horário, objetivo de treino e preferências'
  },
  {
    number: 3,
    title: 'Dê match',
    description: 'Veja perfis compatíveis e curta quem tiver afim de treinar junto'
  },
  {
    number: 4,
    title: 'Bora treinar!',
    description: 'Converse, combine e faça check-in quando chegarem na academia'
  }
]

export const HowItWorks = () => {
  return (
    <Section id="como-funciona">
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>Como funciona</h2>
          <p className={styles.subtitle}>Em 4 passos simples você já tem seu spotter</p>
        </div>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              {index < steps.length - 1 && (
                <div className={styles.connector}>
                  <Icon name="arrow" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
