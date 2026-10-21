import styles from './TestimonialCard.module.css'
import { Icon } from '@/shared/ui/Icon'

export const TestimonialCard = ({ name, gym, rating, text }) => {
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('')
  }

  return (
    <article className={styles.card}>
      <div className={styles.stars} aria-label={`${rating} estrelas`}>
        {[...Array(rating)].map((_, i) => (
          <Icon key={i} name="star" className={styles.starFilled} />
        ))}
      </div>
      <p className={styles.text}>"{text}"</p>
      <div className={styles.author}>
        <div className={styles.avatar} aria-hidden="true">
          {getInitials(name)}
        </div>
        <div className={styles.authorInfo}>
          <span className={styles.authorName}>{name}</span>
          <span className={styles.authorGym}>{gym}</span>
        </div>
      </div>
    </article>
  )
}
