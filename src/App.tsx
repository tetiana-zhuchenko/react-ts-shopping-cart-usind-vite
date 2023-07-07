import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { ToDoList } from './pages/ToDoList'
import { Store } from './pages/Store'
import { MyGarage } from './pages/MyGarage'
import { Navbar } from './components/Navbar'
import { ShoppingCartProwider } from './context/ShoppingCartContext'

function App() {
  return (
    <ShoppingCartProwider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<ToDoList />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<MyGarage />} />
        </Routes>
      </Container>
    </ShoppingCartProwider>
  )
}

export default App
