import { Button, Modal } from 'react-bootstrap'
import { useModalWindow } from '../context/ModalWindowContext'
type ModalWindowProps = {
  showModal: boolean
}

export function ModalWindow({ showModal }: ModalWindowProps) {
  const { handleClose } = useModalWindow()

  return (
    <>
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>You don't have enough money to make a purchase</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
