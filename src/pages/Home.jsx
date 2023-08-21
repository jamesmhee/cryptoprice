import React from 'react'
import { MdCurrencyExchange } from "react-icons/md"
import Table from '../components/Table'
const Home = () => {

  return (
    <div className='flex justify-center bg-light-bg dark:bg-dark-bg h-screen max-h-screen'>
      <Table />
      <div className='text-dark-bg mt-10 dark:text-light-bg'><MdCurrencyExchange className='inline-flex mr-5'/>Switch Currency</div>    
    </div>
  )
}

export default Home
