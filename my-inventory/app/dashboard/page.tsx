import React from 'react'


type Props = {}

function page({}: Props) {
  return (
    <div className='grid grid-cols-3 grid-rows-8 bg-amber-400 w-[300px] h-[300px] gap-3'> 
      <div className='row-span-6 bg-amber-800 '></div>
      <div className='row-span-6 bg-amber-800 '></div> 
       <div className='row-span-6 bg-amber-800 '></div> 
      
      
    </div>
  )
}

export default page