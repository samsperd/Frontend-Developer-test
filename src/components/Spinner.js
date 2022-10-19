import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const Spinner = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div className="flex-1 flex justify-center text-yellow-400">
        <FaSpinner className='animate-spin' size={50} />
      </div>
    </div>
  )
}

export default Spinner