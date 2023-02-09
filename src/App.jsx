import { Header } from './components/Header/Header'
import { Footer } from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home'
import { Electronics } from './components/pages/Electronics'
import { Jewelery } from './components/pages/Jewelery'
import { MensClothing } from './components/pages/MensClothing'
import { WomensClothing } from './components/pages/WomensClothing'
import { Menu } from './components/Menu'
import { Cart } from './components/Cart/Cart'

export const App = () => {
  return (
    <>
      <Header />
      <Footer />
      <Routes>
        <Route 
          element={<Home />}
          path='/'
        />
        <Route 
          element={<Electronics />}
          path='/electronics'
        />
        <Route 
          element={<Jewelery />}
          path='/jewelery'
        />
        <Route 
          element={<MensClothing />}
          path='/mensclothing'
        />
        <Route 
          element={<WomensClothing />}
          path='/womensclothing'
        />
      </Routes>
      <Menu />
      <Cart />
    </>
  )
}