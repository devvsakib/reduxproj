import Products from './components/Products'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Cart from './components/Cart'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Layout from './components/Layout'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route index element={<Products />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Route>
  ))
  return (
    <div className=''>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
