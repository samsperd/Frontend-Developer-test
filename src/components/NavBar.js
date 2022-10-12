import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => (setNav(!nav))



  return (
    <nav className='flex items-center justify-between bg-black text-white p-4'>
        <Link to={'/'}>
            <div className='flex items-center gap-2'>
                <FaShoppingBag size={30} />
                <h3 className='font-bold text-xl'>
                    Artisto
                </h3>
            </div>
        </Link>
        <div className='hidden md:flex gap-7 items-center justify-center'>
            <ul className='flex text-base gap-10'>
                <li className=''>Events</li>
                <li>Museum</li>
                <li>Arts</li>
                <li>Galleries</li>
            </ul>
        <div className='flex items-center justify-between gap-4 text-lg'>
            <div className='bg-white border-r-[5px] border-b-[5px] rounded-bl-[2.1rem] rounded-tr-[2.1rem] border-white w-40 h-14'>
                <button className='justify-center bg-yellow-400 border-yellow-400 border-t-2 rounded-bl-[1.8rem] rounded-tr-[1.8rem] text-black w-full h-full'>Login</button>
            </div>
            <div className='bg-yellow-400 border-r-[5px] border-b-[5px] rounded-bl-[2.1rem]  rounded-tr-[2.1rem] border-yellow-400 w-40 h-14'>
                <button className='justify-center border-t-2 border-white bg-white rounded-bl-[1.8rem] rounded-tr-[1.8rem] text-black w-full h-full'>Explore Arts</button>
            </div>
        </div>
        </div>
        <div className="md:hidden"  onClick={handleNav}>
            <AiOutlineMenu size={25} />
        </div>
        <div className={ nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-white/30' : 'hidden' }>
            <div className={ nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w[45%] h-screen bg-black p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    <div className="flex w-full items-center justify-between">
                        <div className="rounded-full bg-white text-black shadow-lg shadow-gray-400 p-3 cursor-pointer" onClick={handleNav}>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="">
                                <li className="py-4 text-sm">
                                    Events
                                </li>
                                <li className="py-4 text-sm">
                                    Museum
                                </li>
                                <li className="py-4 text-sm">
                                    Arts
                                </li>
                                <li className="py-4 text-sm">
                                    Galleries
                                </li>
                        </ul>
                        <div className='my-4 text-sm bg-white border-r-[5px] border-b-[5px] rounded-bl-[2.1rem] rounded-tr-[2.1rem] border-white w-40 h-14'>
                <button className='justify-center bg-yellow-400 border-yellow-400 border-t-2 rounded-bl-[1.8rem] rounded-tr-[1.8rem] text-black w-full h-full'>Login</button>
            </div>
            <div className='my-4 text-sm bg-yellow-400 border-r-[5px] border-b-[5px] rounded-bl-[2.1rem]  rounded-tr-[2.1rem] border-yellow-400 w-40 h-14'>
                <button className='justify-center border-t-2 border-white bg-white rounded-bl-[1.8rem] rounded-tr-[1.8rem] text-black w-full h-full'>Explore Arts</button>
            </div>


                    </div>
                </div>
            </div>
        </div>        
    </nav>
  )
}

export default NavBar