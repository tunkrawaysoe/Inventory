import React from 'react'
import { Menu } from 'lucide-react'

type Props = {}

const SideBar = (props: Props) => {
  return (
    <div>
        {/* Top Section */}
        <div className='flex gap-3 justify-between md:justify-normal items-center pt-8'>
            <div>Logo</div>
            <h1>Tun Kraway Soe ggg</h1>
            <button className="p-2 md:hidden bg-gray-100 rounded-full hover:bg-blue-100">
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