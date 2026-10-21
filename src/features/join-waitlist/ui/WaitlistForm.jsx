import { useState } from 'react'
import styles from './WaitlistForm.module.css'
import { Button } from '@/shared/ui/Button'
import { validateEmail, validateName, validateRequired } from '@/shared/lib/validation/email'

export const WaitlistForm = ({ onSuccess, selectedPlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gym: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    
    if (!validateName(formData.name)) {
      newErrors.name = 'Nome precisa ter pelo menos 2 caracteres'
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'E-mail inválido'
    }
    if (!validateRequired(formData.gym)) {
      newErrors.gym = 'Informe o nome da sua academia'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validate()) {
      return
    }
    
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      onSuccess(formData)
    }, 500)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      {selectedPlan && (
        <div className={styles.selectedPlan}>
          <strong>Plano escolhido:</strong> {selectedPlan.name}
        </div>
      )}
      
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          Nome completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <span id="name-error" className={styles.error}>{errors.name}</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <span id="email-error" className={styles.error}>{errors.email}</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="gym" className={styles.label}>
          Academia onde treina
        </label>
        <input
          type="text"
          id="gym"
          name="gym"
          value={formData.gym}
          onChange={handleChange}
          className={`${styles.input} ${errors.gym ? styles.inputError : ''}`}
          aria-invalid={!!errors.gym}
          aria-describedby={errors.gym ? 'gym-error' : undefined}
          placeholder="Ex: Smart Fit, Bio Ritmo..."
        />
        {errors.gym && (
          <span id="gym-error" className={styles.error}>{errors.gym}</span>
        )}
      </div>

      <Button type="submit" variant="primary" fullWidth disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Entrar na lista de espera'}
      </Button>
    </form>
  )
}
