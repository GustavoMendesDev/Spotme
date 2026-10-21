import styles from './Hero.module.css'
import { Section } from '@/shared/ui/Section'
import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import { useModal } from '@/app/App'

export const Hero = () => {
  const { openModal } = useModal()

  return (
    <Section className={styles.hero} id="hero">
      <Container>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <span className={styles.badge}>🔥 Novo app para academia</span>
            <h1 className={styles.title}>
              Nunca treine <span className={styles.gradientText}>sozinho</span> de novo
            </h1>
            <p className={styles.subtitle}>
              SpotMe conecta você a um parceiro de treino compatível na sua academia, 
              no mesmo horário e com o mesmo objetivo. Segurança, motivação e bom papo garantidos.
            </p>
            <div className={styles.actions}>
              <Button onClick={() => openModal()}>
                Entrar na lista de espera
                <Icon name="arrow" />
              </Button>
              <Button variant="secondary" onClick={() => document.getElementById('como-funciona').scrollIntoView({ behavior: 'smooth' })}>
                Como funciona
              </Button>
            </div>
          </div>
          <div className={styles.mockupContainer}>
            <div className={styles.mockup}>
              <div className={styles.mockupInner}>
                <div className={styles.mockupHeader}>
                  <div className={styles.mockupLogo}>SpotMe</div>
                </div>
                <div className={styles.mockupContent}>
                  <div className={styles.matchCard}>
                    <div className={styles.matchAvatar}></div>
                    <div className={styles.matchInfo}>
                      <div className={styles.matchName}>Pedro, 25</div>
                      <div className={styles.matchDetails}>Musculação • Horário: 18h</div>
                    </div>
                    <div className={styles.matchButtons}>
                      <button className={`${styles.matchBtn} ${styles.matchBtnReject}`} aria-label="Rejeitar">✕</button>
                      <button className={`${styles.matchBtn} ${styles.matchBtnAccept}`} aria-label="Aceitar">♥</button>
                    </div>
                  </div>
                  <div className={styles.matchCard}>
                    <div className={styles.matchAvatar}></div>
                    <div className={styles.matchInfo}>
                      <div className={styles.matchName}>Julia, 23</div>
                      <div className={styles.matchDetails}>Musculação • Horário: 18h</div>
                    </div>
                    <div className={styles.matchButtons}>
                      <button className={`${styles.matchBtn} ${styles.matchBtnReject}`} aria-label="Rejeitar">✕</button>
                      <button className={`${styles.matchBtn} ${styles.matchBtnAccept}`} aria-label="Aceitar">♥</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
