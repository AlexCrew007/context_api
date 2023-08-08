import React from 'react'
import { NavLink } from 'react-router-dom'

export const Card = ({title,author,date,category,tags,content,id}) => {

  return (
   
    <div className='w-5/12 m-4 mt-2'>
    <div className='flex-col'>
        <NavLink to={`/blog/${id}`}> <span className='font-bold text-s '>{title} </span> </NavLink>
        <NavLink to={`/categories/${category}`}>
        
          <p className='text-[14px]'>By 
            <span className='italic'>
                {` ${ author}`} 
            </span>
            <span><b className=''>{` ${category}`}</b> </span>
            </p> 
        </NavLink>
        <p className='text-[14px]' >Posted on {date}</p>
        <p className='mt-5 text-[14px]'>{content}</p>
        <div className='mt-2 flex flex-row text-blue-500 font-bold underline cursor-pointer gap-x-1'>
        {
            tags.map( (tg,index) =>{
              return <NavLink to={`/tag/${tg}`} key={index}><span className='text-[12px]' key={index}>{` #${tg}`}</span></NavLink>
        })
        }
        </div>
      
    </div>
    </div>
  )
}
