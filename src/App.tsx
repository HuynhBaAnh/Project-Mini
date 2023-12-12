import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Component/Layout'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/homepage' element={<HomePage/>}/>
          <Route path='/blog' element={<ProductPage />}/>
          <Route path='/category' element={<ProductPage/>}/>
          <Route path='/product' element={<ProductPage/>}/>
          <Route path='/login' element={<ProductPage/>}/>
          <Route path='/customer' element={<ProductPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
