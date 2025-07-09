import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-green-900 text-white '>
            <div className="mycontainer flex justify-between items-center px-4 h-15 py-5">
            <div className="logo font-bold text-2xl ">
              <span className='text-green-500'>&lt;</span> 
               <span>Pass</span>
              <span className='text-green-500'>OP/&gt;</span>   
            </div>
           
            <button className='text-white bg-green-900 my-5 rounded-md flex justify-between items-center ring-white ring-2'>
                <img className='invert p-1 w-10' src="icons/github.svg" alt="" />
                <span className='font-bold px-2'>Github</span>
                
            </button>
            </div>
        </nav>
    )
}

export default Navbar
