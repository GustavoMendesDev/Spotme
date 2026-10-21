import styles from './Section.module.css'

export const Section = ({ children, className = '', id, ...props }) => {
  return (
    <section id={id} className={`${styles.section} ${className}`} {...props}>
      {children}
    </section>
  )
}
