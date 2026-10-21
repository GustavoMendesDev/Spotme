import styles from './Footer.module.css'
import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { useModal } from '@/app/App'

export const Footer = () => {
  const { openModal } = useModal()

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.logo}>SpotMe</div>
            <p className={styles.tagline}>
              Conectando pessoas para treinar juntas com segurança, motivação e bom humor.
            </p>
            <Button onClick={() => openModal()} style={{ width: 'fit-content' }}>
              Garantir meu spot
            </Button>
          </div>
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Navegação</h4>
            <ul className={styles.links}>
              <li><a href="#hero" className={styles.link}>Início</a></li>
              <li><a href="#como-funciona" className={styles.link}>Como funciona</a></li>
              <li><a href="#beneficios" className={styles.link}>Benefícios</a></li>
              <li><a href="#depoimentos" className={styles.link}>Depoimentos</a></li>
            </ul>
          </div>
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Produto</h4>
            <ul className={styles.links}>
              <li><a href="#planos" className={styles.link}>Planos</a></li>
              <li><a href="#faq" className={styles.link}>FAQ</a></li>
              <li><button onClick={() => openModal()} className={styles.link} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}>Lista de espera</button></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© 2026 SpotMe. Projeto acadêmico fictício.</p>
        </div>
      </Container>
    </footer>
  )
}
