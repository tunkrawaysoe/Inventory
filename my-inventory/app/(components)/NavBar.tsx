"use client"
import { Bell, Menu } from 'lucide-react'
import React from 'react'
type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className='  bg-amber-300 flex w-full justify-between items-center'>
       {/* left side */}
       <div className='flex items-center justify-center'>
            <button className='rounded-full bg-gray-100 hover:bg-blue-1  00 p-1' onClick={()=>{}}>
                <Menu className='h-6 w-6'/>
            </button>
            <div className='relative'>
                <input type='search' placeholder='Search Groups and Products' className='pl-10 pr-4 py-2 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500'/>
                <div className='absolute flex items-center inset-y-0 pl-3'>
                    <Bell className='text-gray-500'/>
                    

                </div>

            </div>
        </div>
       {/* Right SIde */}
       <div>
        World

       </div>
    </div>
  )
}

export default NavBar