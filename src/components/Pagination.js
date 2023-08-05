import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Pagination = () => {
  
  const {page,totalPage,handelPageChange} = useContext(AppContext);
  const pageNumber = page

  return (
    <div className='flex  border p-2 gap-x-3 justify-center items-center'>
      <div className='w-5/12  flex justify-between '>
      {
        pageNumber === 1 ? <button className='border font-bold rounded-md px-4 py-1' onClick={()=>handelPageChange(page+1)}>Next</button> : pageNumber ===totalPage ? <button className='rounded-md border px-4 py-1 font-bold' onClick={()=>handelPageChange(page-1)}>Previous</button> :
        <div className='flex gap-x-5'>
          <button className='font-bold border rounded-md px-4 py-1' onClick={()=>handelPageChange(page-1)}>Previous</button>
          <button className='font-bold rounded-md border px-4 py-1' onClick={()=>handelPageChange(page+1)}>Next</button>
        </div>
      }
      <p className='font-bold'>Page {page} of {totalPage}</p>
    </div>
    </div>
  )
}
