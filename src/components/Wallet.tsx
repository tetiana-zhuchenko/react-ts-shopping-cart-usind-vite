import { Button, Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'

import { formatCurrency } from '../utilities/formatCurrency'
import StoreItems from '../data/items.json'

type ShoppingCartPops = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartPops) {
  const { closeCart, cartItems } = useShoppingCart()
  return (
    <>
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            <div className="m-auto fw-bold fs-7">
              Aviable money:{' '}
              <span>
                {formatCurrency(
                  cartItems.reduce((total, cartItem) => {
                    const item = StoreItems.find(
                      (oneItem) => oneItem.id === cartItem.id
                    )
                    return total + (item?.price || 0) * cartItem.quantity
                  }, 0)
                )}
              </span>
            </div>
            <Button>Buy</Button>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
