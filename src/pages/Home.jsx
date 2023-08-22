import React from 'react'
import Table from '../components/Table'
import Switch from '../components/Switch'
const Home = () => {

  return (
    <div className='flex justify-center bg-light-bg dark:bg-dark-bg h-auto max-h-full'>
      <div className='md:overflow-hidden shrink bg-light-red dark:bg-dark-bg border-[1.7px] rounded-xl md:my-5 mx-1 my-2 px-2 md:px-1 w-auto max-w-full'>
        <Switch/>
        <Table/>
      </div>
    </div>
  )
}

export default Home
