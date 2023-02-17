import { Header } from './components/Header/Header'
import { Footer } from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home'
import { Electronics } from './components/pages/Electronics'
import { Jewelery } from './components/pages/Jewelery'
import { MensClothing } from './components/pages/MensClothing'
import { WomensClothing } from './components/pages/WomensClothing'
import { NoMatch } from './components/pages/NoMatch'
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
          path='/random-store'
        />
        <Route 
          element={<Electronics />}
          path='/random-store/electronics'
        />
        <Route 
          element={<Jewelery />}
          path='/random-store/jewelery'
        />
        <Route 
          element={<MensClothing />}
          path='/random-store/mensclothing'
        />
        <Route 
          element={<WomensClothing />}
          path='/random-store/womensclothing'
        />
        <Route 
          element={<NoMatch />}
          path='*'
        />
      </Routes>
      <Menu />
      <Cart />
    </>
  )
}