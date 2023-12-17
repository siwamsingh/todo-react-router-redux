import React from 'react'
import { Link } from 'react-router-dom'

export default function AddList() {
  return (
    <div className='flex bg-red-500 justify-center h-full'>
      <div className='bg-yellow-600 flex flex-col w-1/2'>
        <Link className=' border-4 border-blue-900' to={'/'}>X</Link>
        <textarea maxLength="300" cols="30" rows="10"  className='border h-96 border-black resize-none ' ></textarea>
        <button className=' border-2 border-black '>Add</button>
      </div>
    </div>
  )
}
