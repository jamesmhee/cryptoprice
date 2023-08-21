import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Table = () => {
    const [ assets, setAssets ] = useState([])
    const url = 'https://api.coincap.io/v2/assets'
    const getAssets = async () =>{
      await axios.get(url).then((res)=> setAssets(res))
    }
    useEffect(()=>{
      try{
        getAssets() 
      } catch(error){
        console.log('error', error)
      }
    }, [])    
    const item = assets?.data
    const item2 = item?.data
    console.log(item)
    console.log(item2)
    
  return (
    <div className='my-2'>
        <div className='text-black'></div>
    </div>
  )
}

export default Table
