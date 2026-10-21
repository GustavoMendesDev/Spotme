import styles from './BenefitCard.module.css'
import { Icon } from '@/shared/ui/Icon'

export const BenefitCard = ({ icon, title, description }) => {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon name={icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  )
}
