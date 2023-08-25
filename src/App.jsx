import { createContext, useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { getAssets } from './functions/Getdata'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Asset from './pages/Asset.jsx'
import AssetsContext from './context/AssetsContext'

function App() {
  const [assets, setAssets] = useState([]);

  const fetchAsset = async () => {
    try {
      const response = await getAssets();
      setAssets(response?.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchAsset()
  }, [assets]);

  return (
    <AssetsContext.Provider value={assets}>
      <BrowserRouter>
        <div className='scroll-smooth'>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/asset/:id' element={<Asset />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AssetsContext.Provider>
  )
}

export default App
