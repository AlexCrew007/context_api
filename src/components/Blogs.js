import React, { useContext } from 'react';
import { Card } from './Card';
import { Spinner } from './Spinner';
import { AppContext } from '../context/AppContext'

export const Blogs = () => {
  
  const {loading,posts} = useContext(AppContext)
  return (
    <div className='flex flex-col justify-center items-center'>
    <div className='m-6 flex flex-col justify-center items-center'>
      {
        loading ? <Spinner></Spinner> : 
        (posts.length===0 ? <p>No Posts Found</p> : posts.map( (data) => {
          return <Card  key={data.id} {...data}></Card>
        }))
      }
    </div>
    </div>
  )
}
