import React from 'react'


import { Card } from './Card'



export const BlogsByID = ({data, relatedData}) => {
  return (
    <div >
        <div className='flex flex justify-center items-center'>
        <div className='flex flex justify-center items-center '>
            <Card {...data}/>
          </div>
          </div>
          <div className='m-2 flex justify-center items-center'>
          <div className='w-5/12 justify-center'>
            <h1 className='text-3xl text-left font-bold'>Related Blogs</h1>
          </div>
          </div>
        <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
            
            {
              relatedData.map( (rData)=>{
                return <Card key={rData.id} {...rData}></Card>
              } )
            }
        </div>  
        </div>
        
        </div>
  )
}
