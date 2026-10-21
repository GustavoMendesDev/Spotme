import styles from './Header.module.css'
import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import { useModal } from '@/app/App'

export const Header = () => {
  const { openModal } = useModal()

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <a href="#" className={styles.logo} aria-label="SpotMe - Página inicial">
            SpotMe
          </a>
          <ul className={styles.navLinks}>
            <li><a href="#como-funciona" className={styles.navLink}>Como funciona</a></li>
            <li><a href="#beneficios" className={styles.navLink}>Benefícios</a></li>
            <li><a href="#depoimentos" className={styles.navLink}>Depoimentos</a></li>
            <li><a href="#planos" className={styles.navLink}>Planos</a></li>
            <li><a href="#faq" className={styles.navLink}>FAQ</a></li>
          </ul>
          <Button className={styles.navButton} onClick={() => openModal()}>
            Entrar na lista de espera
          </Button>
          <button className={styles.mobileMenuButton} aria-label="Menu">
            <Icon name="menu" />
          </button>
        </nav>
      </Container>
    </header>
  )
}
