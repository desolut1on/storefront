import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element = {<ProductPage/>}/>
        <Route path ="/cart" element = {<CartPage/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App