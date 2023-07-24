import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { ToDoList } from './pages/ToDoList'
import { CarShowroom } from './pages/CarShowroom'
import { MyGarage } from './pages/MyGarage'
import { Navbar } from './components/Navbar'
import { ShoppingCartProwider } from './context/ShoppingCartContext'
import { WalletProwider } from './context/WalletContext'
import { MyGarageProwider } from './context/MyGarageContext'
import { ModalWindowProwider } from './context/ModalWindowContext'

function App() {
  return (
    <WalletProwider>
      <ModalWindowProwider>
        <MyGarageProwider>
          <ShoppingCartProwider>
            <Navbar />
            <Container className="mb-4">
              <Routes>
                <Route path="/" element={<ToDoList />} />
                <Route path="/car-showroom" element={<CarShowroom />} />
                <Route path="/my-garage" element={<MyGarage />} />
              </Routes>
            </Container>
          </ShoppingCartProwider>
        </MyGarageProwider>
      </ModalWindowProwider>
    </WalletProwider>
  )
}

export default App
