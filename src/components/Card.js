import React from 'react'

export const Card = ({title,author,date,category,tags,content,img}) => {
    
  return (
    <div className='w-5/12 m-4 mt-2'>
    <div className='flex-col '>
        <p className='font-bold text-s'>{title}</p>
        <p className='text-[14px]'>By <span className='italic'>{author} </span><b>{category}</b> </p> 
        <p className='text-[14px]' >Posted on {date}</p>
        <p className='mt-2 text-[14px]'>{content}</p>
        <div className='mt-2 flex flex-row text-blue-500 font-bold underline cursor-pointer gap-x-1'>
        {
            tags.map( (tg,index) =>{
              return <span className='text-[12px]' key={index}>{` #${tg}`}</span>
        })
        }
        </div>
      
    </div>
    </div>
  )
}
