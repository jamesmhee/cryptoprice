import { useContext, useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Asset from './pages/Asset.jsx'

function App() {
  const fetchAssets = async () =>{
    
  }

  return (
    <BrowserRouter>
      <div className='scroll-smooth'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/asset/:id' element={<Asset />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
