import { Button, Offcanvas, Stack } from 'react-bootstrap'
import { useWallet } from '../context/WalletContext'

import { formatCurrency } from '../utilities/formatCurrency'

type WalletPopsType = {
  isOpen: boolean
}

export function Wallet({ isOpen }: WalletPopsType) {
  const { closeWallet, currentMoneyAmount } = useWallet()
  return (
    <>
      <Offcanvas show={isOpen} onHide={closeWallet} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My money</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            <div className="m-auto fw-bold fs-7">
              Aviable money: <span>{formatCurrency(currentMoneyAmount)}</span>
            </div>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
