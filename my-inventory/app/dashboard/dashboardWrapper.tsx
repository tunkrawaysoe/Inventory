"use client"
import React from 'react'
import { useEffect } from 'react'
import NavBar from '../(components)/NavBar'
import SideBar from '../(components)/SideBar'
import StoreProvider, { useAppSelector } from '../redux'

type Props = {}

const DashboardLayOut = ({children}: {children : React.ReactNode}) => {
  const isSidebarCollapsed = useAppSelector((state)=>state.global.isSidebarCollapsed);
  const isDarkMode = useAppSelector((state)=>state.global.isDarkMode)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  });
  return (
    <div  className='flex  bg-gray-50 text-gray-900 min-h-screen w-full '>
        <SideBar/>
             <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${
          isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
        }`}
      >
        <NavBar />
        {children}
      </main>
       
    </div>
  )
}

const DashboardWrapper = ({children}: {children : React.ReactNode}) => {
  return (
    <StoreProvider>
      <DashboardLayOut>
        {children}
      </DashboardLayOut>
    </StoreProvider>
  )
}

export default DashboardWrapper