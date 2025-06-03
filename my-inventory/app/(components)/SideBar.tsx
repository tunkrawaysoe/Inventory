
import React from 'react'
import { Menu } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '../redux'
import { setIsSidebarCollapsed } from '../(state)'

type Props = {}

const SideBar = (props: Props) => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state)=>state.global.isSidebarCollapsed)
const sidebarClassNames = `fixed flex flex-col ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;


  const toggleSideBar = ()=>{
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
    console.log("uo eoj")
  }
  return (
    <div className={sidebarClassNames}>
        {/* Top Section */}
        <div className='flex gap-3 md:justify-normal items-center justify-center p-5'>
            <div>Logo</div>
            <h1>Tun Kraway Soe</h1>
            <button 
            className="p-2 md:hidden bg-gray-100 rounded-full hover:bg-blue-100"
            onClick={toggleSideBar}
            >
                <Menu size={20} />
            </button>
        </div>
        {/* Middel section with links */}
        <div>

        </div>
        {/* Footer */}
         <div className={`mb-10`}>
          <p className="text-center text-xs text-gray-500">&copy; 2024 Edstock</p>
        </div>
    </div>
  )
}

export default SideBar