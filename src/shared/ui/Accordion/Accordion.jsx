import { useState } from 'react'
import styles from './Accordion.module.css'
import { Icon } from '@/shared/ui/Icon'

export const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.accordionItem}>
      <button
        className={styles.accordionButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`accordion-${question}`}
      >
        <span>{question}</span>
        <span className={`${styles.chevron} ${isOpen ? styles.open : ''}`}>
          <Icon name="chevron" />
        </span>
      </button>
      <div
        id={`accordion-${question}`}
        className={`${styles.accordionContent} ${isOpen ? styles.open : ''}`}
        role="region"
        aria-labelledby={`accordion-button-${question}`}
      >
        <p className={styles.accordionText}>{answer}</p>
      </div>
    </div>
  )
}

export const Accordion = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  )
}
