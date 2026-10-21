import '@/app/index.css'
import { LandingPage } from '@/pages/landing'
import { JoinWaitlistModal } from '@/features/join-waitlist'
import { useState, createContext, useContext } from 'react'

const ModalContext = createContext()

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) throw new Error('useModal must be used within ModalProvider')
  return context
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)

  const openModal = (plan = null) => {
    setSelectedPlan(plan)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPlan(null)
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      <LandingPage />
      <JoinWaitlistModal isOpen={isModalOpen} onClose={closeModal} selectedPlan={selectedPlan} />
    </ModalContext.Provider>
  )
}

export default App
