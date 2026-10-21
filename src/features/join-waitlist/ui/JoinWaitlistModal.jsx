import { useState } from 'react'
import { Modal } from '@/shared/ui/Modal'
import { WaitlistForm } from './WaitlistForm'
import styles from './JoinWaitlistModal.module.css'

export const JoinWaitlistModal = ({ isOpen, onClose, selectedPlan }) => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [submittedData, setSubmittedData] = useState(null)

  const handleSuccess = (data) => {
    setSubmittedData(data)
    setIsSuccess(true)
  }

  const handleClose = () => {
    setIsSuccess(false)
    setSubmittedData(null)
    onClose()
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={handleClose} 
      title={isSuccess ? 'Sucesso!' : 'Entrar na lista de espera'}
    >
      {isSuccess ? (
        <div className={styles.success}>
          <div className={styles.successIcon}>🎉</div>
          <h3 className={styles.successTitle}>Você está na lista!</h3>
          <p className={styles.successMessage}>
            Valeu, <strong>{submittedData?.name}</strong>! 
          </p>
          <p className={styles.successMessage}>
            Te avisaremos por e-mail quando o SpotMe estiver disponível.
          </p>
          <p className={styles.successNote}>
            Foco nos treinos! Seu spotter tá chegando 💪
          </p>
        </div>
      ) : (
        <>
          <p className={styles.description}>
            Preencha os dados abaixo para garantir seu acesso ao SpotMe assim que lançarmos.
          </p>
          <WaitlistForm onSuccess={handleSuccess} selectedPlan={selectedPlan} />
        </>
      )}
    </Modal>
  )
}
