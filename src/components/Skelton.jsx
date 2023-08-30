import React from 'react'

const Skelton = () => {
  return (
    <tbody className="text-dark-elem dark:text-light-elem">
    <tr className="hover:bg-zinc-100 dark:hover:bg-slate-600 h-20 ">
      <td className="pl-5 animate-pulse h-20 w-24">
        <div className="h-2 bg-zinc-300 dark:bg-slate-800 rounded"></div>
      </td>
      <td className="animate-pulse h-20 w-auto">
        <div className="h-2 bg-zinc-300 dark:bg-slate-800 rounded"></div>
      </td>
      <td className="animate-pulse h-20 md:w-80">
        <div className="h-2 bg-zinc-300 dark:bg-slate-800 rounded"></div>
      </td>
      <td className="animate-pulse h-20 hidden md:w-80 md:table-cell">
        <div className="h-2 bg-zinc-300 dark:bg-slate-800 rounded"></div>
      </td>
      <td className="pr-5 animate-pulse h-20 md:w-80">
        <div className="h-2 bg-zinc-300 dark:bg-slate-800 rounded"></div>
      </td>
    </tr>
  </tbody>
  )
}

export default Skelton
