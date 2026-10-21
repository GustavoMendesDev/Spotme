import { useState } from 'react'

export const useJoinWaitlist = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const submit = (formData) => {
    return new Promise((resolve) => {
      setIsSubmitting(true)
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSuccess(true)
        resolve(formData)
      }, 500)
    })
  }

  const reset = () => {
    setIsSuccess(false)
  }

  return {
    submit,
    isSubmitting,
    isSuccess,
    reset
  }
}
