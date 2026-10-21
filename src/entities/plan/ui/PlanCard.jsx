import styles from './PlanCard.module.css'
import { Button } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import { useModal } from '@/app/App'

export const PlanCard = ({ plan }) => {
  const { openModal } = useModal()
  
  const handleChoosePlan = () => {
    openModal(plan)
  }

  return (
    <article className={`${styles.card} ${plan.highlighted ? styles.highlighted : ''}`}>
      {plan.highlighted && <div className={styles.badge}>Mais popular</div>}
      <h3 className={styles.planName}>{plan.name}</h3>
      <p className={styles.description}>{plan.description}</p>
      <div className={styles.priceContainer}>
        <span className={styles.price}>{plan.price}</span>
        {plan.period && <span className={styles.period}>{plan.period}</span>}
      </div>
      <ul className={styles.features}>
        {plan.features.map((feature, index) => (
          <li key={index} className={styles.feature}>
            <Icon name="check" className={styles.checkIcon} />
            <span className={styles.featureText}>{feature}</span>
          </li>
        ))}
      </ul>
      <Button onClick={handleChoosePlan} variant={plan.highlighted ? 'primary' : 'secondary'} fullWidth>
        Escolher plano
      </Button>
    </article>
  )
}
