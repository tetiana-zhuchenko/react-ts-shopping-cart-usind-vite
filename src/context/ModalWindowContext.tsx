import { useContext, createContext, ReactNode, useState } from 'react'
import { ModalWindow } from '../components/ModalWindow'

type ModalWindowProwiderPropsType = {
  children: ReactNode
}

type ModalWindowContextType = {
  handleClose: () => void
  handleShow: () => void
  showModal: boolean
}

const ModalWindowContext = createContext({} as ModalWindowContextType)

export function useModalWindow() {
  return useContext(ModalWindowContext)
}

export function ModalWindowProwider({
  children,
}: ModalWindowProwiderPropsType) {
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  return (
    <ModalWindowContext.Provider
      value={{
        handleClose,
        handleShow,
        showModal,
      }}
    >
      {children}
      <ModalWindow showModal={showModal} />
    </ModalWindowContext.Provider>
  )
}
