import { Col, Row } from 'react-bootstrap'
import { MyGarageItem } from '../components/MyGarageItem'
import { useMyGarageContext } from '../context/MyGarageContext'

export function MyGarage() {
  const { myGarageItems } = useMyGarageContext()
  return (
    <>
      <h1>Garage</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {myGarageItems.map((oneItem) => (
          <Col key={oneItem.id}>
            <MyGarageItem {...oneItem} />
          </Col>
        ))}
      </Row>
    </>
  )
}
