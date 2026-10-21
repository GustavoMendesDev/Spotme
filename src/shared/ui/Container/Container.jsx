import styles from './Container.module.css'

export const Container = ({ children, className = '', ...props }) => {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children}
    </div>
  )
}
