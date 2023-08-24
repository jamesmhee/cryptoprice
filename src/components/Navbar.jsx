import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../ThemeProvider'
import { MdDarkMode, MdSunny, MdCurrencyBitcoin } from 'react-icons/md'

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const isDark = theme === 'dark'

  return (
    <div className='z-[999] sticky top-0 border-b-2 dark:border-b-[1px] bg-light-bg dark:bg-dark-bg h-screen max-h-12 max-w-screen w-auto flex justify-between md:justify-around items-center p-7'>
      <Link to='/'>
        <h1 className='text-2xl dark:text-light-bg font-bold'><MdCurrencyBitcoin className='my-auto inline-flex text-3xl text-light-red'/>CRYPTOPRICE</h1>
      </Link>
      <button className='inline-flex dark:text-light-bg' onClick={()=>{setTheme && setTheme(isDark ? 'light' : 'dark')}}>
        {isDark ? 
          <MdSunny className='text-xl mx-2 text-light-bg duration-300 scale-125 hover:scale-[1.5] hover:bg-slate-100 hover:text-dark-elem rounded-[100%]'/>
        : <MdDarkMode className='text-xl mx-2 text-yellow-400 duration-300 scale-125 hover:scale-[1.5] hover:bg-slate-900 rounded-[100%]'/>
        }
      </button>
    </div>
  )
}

export default Navbar
