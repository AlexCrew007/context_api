import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { Spinner } from '../components/Spinner';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { Pagination } from '../components/Pagination';


export const TagPage = () => {

  const location = useLocation();
  const tag = location.pathname.split('/').at(-1).replaceAll("%20"," ");
  const {fetchData,loading,posts} = useContext(AppContext);
 
  useEffect(()=>{
    fetchData(1,tag, null);
  },[location.pathname,location.search])
  return (
    <div>
    <div className='flex flex-col ietms-center justify-center'>
    <Header/>
    <div className=' flex flex-col justify-center items-center'>
      <div className='w-6/12 flex flex-col justify-center items-center  '>
        <h1 className='font-bold  flex items-center  text-1xl gap-x-2'>Blogs Tagged<span className='text-blue-500 underline'>#{tag}</span></h1>
      </div>
      
      <div className='flex flex-col justify-center items-center border w-6/12'>
      <div className=' w-full flex flex-col justify-center items-center'>
      <div className='m-6  flex flex-col justify-center items-center'>
      {
        loading ? <Spinner></Spinner> : Object.keys(posts).length>0 ? 
        <div>
          {
            posts.map ((post)=>{  
              return <Card key={post.id} {...post}></Card>
            })
          }
        </div>
        :
        <p className='font-bold'>No Blogs Found</p>
        } 
    </div>
    </div>
</div>
    </div>
    </div>
    <Pagination></Pagination>
   </div>
  )
}
