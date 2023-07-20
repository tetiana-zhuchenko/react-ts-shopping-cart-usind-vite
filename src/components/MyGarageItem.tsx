import { Button, Card } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'
import { useShoppingCart } from '../context/ShoppingCartContext'
import items from '../data/items.json'

type MyGarageItemProps = {
  id: number
  quantity: number
}

export function MyGarageItem({ id, quantity }: MyGarageItemProps) {
  // add quantity
  const myGarageItem = items.find((oneItem) => oneItem.id === id)
  if (myGarageItem == null) return null
  return (
    <Card className="h-90 mt-4">
      <Card.Img
        variant="top"
        src={myGarageItem.imgUrl}
        height="200px"
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-center align-items-center m-2 fs-3">
          {myGarageItem.name}
        </Card.Title>
        <div className="d-flex justify-content-between text-muted">
          <span>Quantity:</span>
          <span>
            {quantity} {quantity > 1 ? 'cars' : 'car'}
          </span>
        </div>

        <div className="d-flex justify-content-between text-muted">
          <span>Price for one:</span>
          <span className="ms-2 fs-5 text-muted">
            {formatCurrency(myGarageItem.price)}
          </span>
        </div>
      </Card.Body>
    </Card>
  )
}
