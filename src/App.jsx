import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Products from './components/Products'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import Dashboard from './components/Dashboard'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className=' max-w-[1280px] mx-auto'>
      <Header />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </main>
  )
}

export default App
