import { Button, Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { CartItem } from './CartItem'
import { formatCurrency } from '../utilities/formatCurrency'
import CarShowroomItems from '../data/items.json'
import { useWallet } from '../context/WalletContext'

type ShoppingCartPopsType = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartPopsType) {
  const { closeCart, cartItems, clearCartAddItemsToGarage } = useShoppingCart()
  const { currentMoneyAmount, subtractMoneyFromWallet } = useWallet()

  const totalPurchaseCost: number = cartItems.reduce((total, cartItem) => {
    const item = CarShowroomItems.find((oneItem) => oneItem.id === cartItem.id)
    return total + (item?.price || 0) * cartItem.quantity
  }, 0)

  function buyProducts(currentMoneyAmount: number, totalPurchaseCost: number) {
    if (currentMoneyAmount >= totalPurchaseCost) {
      subtractMoneyFromWallet(totalPurchaseCost)
      clearCartAddItemsToGarage()

      return
    }

    console.log('you have not aviable money')
  }

  return (
    <>
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-5">
              Total: {formatCurrency(totalPurchaseCost)}
            </div>
            <div className="m-auto fw-bold fs-7">
              Aviable money: <span>{formatCurrency(currentMoneyAmount)}</span>
            </div>
            <Button
              onClick={() => buyProducts(currentMoneyAmount, totalPurchaseCost)}
            >
              Purchase
            </Button>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
