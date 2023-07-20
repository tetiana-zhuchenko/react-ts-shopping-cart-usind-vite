import { Col, Row } from 'react-bootstrap'
import CarShowroomItemsList from '../data/items.json'
import { CarShowroomItem } from '../components/CarShowroomItem'

export function CarShowroom() {
  return (
    <>
      <h1>Car showroom</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {CarShowroomItemsList.map((item) => (
          <Col key={item.id}>
            <CarShowroomItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
