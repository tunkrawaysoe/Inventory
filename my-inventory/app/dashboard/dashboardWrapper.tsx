import React from 'react'
import NavBar from '../(components)/NavBar'
import SideBar from '../(components)/SideBar'

type Props = {}

const DashboardWrapper = ({children}: {children : React.ReactNode}) => {
  return (
    <div className='flex bg-gray-50 text-gray-900 min-h-screen w-full'>
        <SideBar/>
        <main className='flex flex-col w-full'>
            <NavBar/>
            {children}
        </main>
       
    </div>
  )
}

export default DashboardWrapper