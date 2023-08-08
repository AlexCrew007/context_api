import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { Card } from '../components/Card';
import { Spinner } from '../components/Spinner';
import { Header } from '../components/Header';
import {Pagination} from '../components/Pagination';  

export const CategoryPage = () => {
  const location = useLocation();
  const categoryName = location.pathname.replace('%20',' ').split('/').at(-1)
  const {fetchData,posts,loading} = useContext(AppContext);
  useEffect(()=>{
    fetchData(1, null, categoryName);
  },[location.pathname])

  return (
    <div className=''>
    <Header/>
    
      <div className=' flex justify-center'>
      <h1 className='font-bold  text-1xl'>Blogs on <span className='udnerline'>{categoryName}</span></h1>
      </div>
   
    <div className='flex flex-col justify-center items-center'>
    
    <div className='flex w-6/12  flex-col justify-center items-center'>      
    <div className='m-5  flex flex-col justify-center items-center'>
    {
      loading ? <Spinner></Spinner> : Object.values(posts).length>0 ?
        <div>
        {posts.map((post)=>{
          return <Card key={post.id} {...post}/>
        })}
        </div>
        : 
        <p className='font-bold'>No Blogs Found</p>
    }
    </div>
    </div>
    </div>
    <Pagination/>
    </div>

  )
}
