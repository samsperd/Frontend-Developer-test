import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => (setNav(!nav))



  return (
    <nav className='flex items-center justify-between bg-black text-white p-4'>
        <Link to={'/'}>
            <div className='flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 30 33" fill="none">
                <path d="M5.29046 21.9508L3.85315 24.0087C2.04667 26.5953 3.89726 30.145 7.05219 30.145H24.0923C27.081 30.145 28.9602 26.9225 27.4883 24.3213L20.3651 11.7332C18.951 9.23414 15.4132 9.06687 13.7696 11.4213L11.3677 14.8621M22.9796 16.1932L25.0668 7.62042C25.762 4.76497 23.1705 2.19497 20.3209 2.91393L4.95015 6.79205C2.13195 7.5031 1.0525 10.9352 2.95632 13.1314L5.61052 16.1932" stroke="white" strokeWidth="3.90203" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
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