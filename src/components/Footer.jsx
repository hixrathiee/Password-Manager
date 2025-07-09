import React from 'react'

const Footer = () => {
  return (
    <div className='bg-green-900 text-white flex flex-col justify-center items-center  w-full'>
         <div className="logo  font-bold text-2xl ">
              <span className='text-green-500'>&lt;</span> 
               <span>Pass</span>
              <span className='text-green-500'>OP/&gt;</span>   
            </div>
      <div className='flex justify-center items-center'>Created with <img className='w-6 mx-2' src="icons/heart.png" alt="" /> by hixrathiee</div>
    </div>
  )
}

export default Footer
