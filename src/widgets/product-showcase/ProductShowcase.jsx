import styles from './ProductShowcase.module.css'
import { Section } from '@/shared/ui/Section'
import { Container } from '@/shared/ui/Container'
import { Icon } from '@/shared/ui/Icon'

export const ProductShowcase = () => {
  return (
    <Section>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>Conheça o SpotMe</h2>
          <p className={styles.subtitle}>
            Simples, prático e feito pra quem vive a academia
          </p>
        </div>
        <div className={styles.grid}>
          <div className={styles.screenCard}>
            <h3 className={styles.screenTitle}>1. Match</h3>
            <div className={styles.phone}>
              <div className={styles.phoneInner}>
                <div className={styles.screenContent}>
                  <div className={styles.matchCard}>
                    <strong style={{ fontSize: '0.9rem' }}>Ana, 24</strong>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                      Peito/Tríceps • 19h
                    </div>
                  </div>
                  <div className={styles.matchCard}>
                    <strong style={{ fontSize: '0.9rem' }}>Lucas, 26</strong>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                      Costas/Bíceps • 19h
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className={styles.screenDescription}>
              Encontre pessoas compatíveis com seu treino e horário
            </p>
          </div>

          <div className={styles.screenCard}>
            <h3 className={styles.screenTitle}>2. Chat</h3>
            <div className={styles.phone}>
              <div className={styles.phoneInner}>
                <div className={styles.screenContent}>
                  <div className={styles.chatBubble}>Bora treinar hoje?</div>
                  <div className={`${styles.chatBubble} ${styles.chatBubbleSelf}`}>Bora! Qual exercício vamos começar?</div>
                  <div className={styles.chatBubble}>Vou chegar em 10 min</div>
                </div>
              </div>
            </div>
            <p className={styles.screenDescription}>
              Combine o treino e se conheça antes de ir pra academia
            </p>
          </div>

          <div className={styles.screenCard}>
            <h3 className={styles.screenTitle}>3. Check-in</h3>
            <div className={styles.phone}>
              <div className={styles.phoneInner}>
                <div className={styles.screenContent}>
                  <div className={styles.checkinCard}>
                    <div className={styles.checkinIcon}>
                      <Icon name="check" />
                    </div>
                    <strong style={{ fontSize: '0.9rem' }}>Check-in realizado!</strong>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      Você e Ana estão na academia
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className={styles.screenDescription}>
              Confirme que vocês chegaram e bora botar pra queimar!
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
