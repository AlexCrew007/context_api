import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
    
      <h1> 
        <header className='text-center text-3xl border font-bold p-2 shadow-lg  uppercase'>
          CodeHelp Blogs
        </header> 
      </h1>
      <div className=' flex flex-col mt-5 justify-center items-center'>
        <div className=' w-6/12 '>   
            <button className='font-bold rounded-md border px-4 py-1 mt-3' onClick={()=>{navigate(-1)}}>
                Back
            </button>
            </div>
          </div>
          <div className=' flex flex-col mt-5 justify-center items-center'>
          </div>
    </div>
  )
}
