import React from 'react'
import { FaHandPaper } from 'react-icons/fa'

const Loader = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div className="flex-1 flex justify-center text-yellow-400">
        <FaHandPaper className='animate-bounce' size={50} />
      </div>
    </div>
  )
}

export default Loader