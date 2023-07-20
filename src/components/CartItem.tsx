import { Button, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import CarShowroomItems from '../data/items.json'
import { formatCurrency } from '../utilities/formatCurrency'

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart()

  const item = CarShowroomItems.find((oneItem) => oneItem.id === id)
  if (item == null) return null
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt={item.name}
        style={{ width: '125px', height: '75px', objectFit: 'cover' }}
      />
      <div className="me-auto">
        <div>{item.name}</div>
        <div>
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => decreaseCartQuantity(item.id)}
          >
            -
          </Button>
          {quantity && (
            <span className="text-muted" style={{ padding: '.5rem' }}>
              {quantity}
            </span>
          )}

          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => increaseCartQuantity(item.id)}
          >
            +
          </Button>
        </div>
        <div className="text-muted" style={{ fontSize: '.75rem' }}>
          {formatCurrency(item.price)}
        </div>
      </div>

      <div> {formatCurrency(item.price * quantity)}</div>

      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  )
}
