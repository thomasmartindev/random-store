import { Header } from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Footer } from './components/Footer'
import { Menu } from './components/Menu/'
import { Cart } from './components/Cart/Cart'

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route 
          element={<Home />}
          path='/'
        />
      </Routes>
      <Footer />
      <Menu />
      <Cart />
    </>
  )
}