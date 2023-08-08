import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { urlBasedId } from '../UrlBasedId.js';
import { AppContext } from '../context/AppContext';
import { Spinner } from '../components/Spinner';
import { BlogsByID } from '../components/BlogsByID';
import { Header } from '../components/Header';


export const BlogPage = () => {

    const location = useLocation(); 
    const blogId = location.pathname.split('/')[2]

    const [data,setData] = useState([]);
    const [relatedData, setRelatedData] =useState([]);
    const {loading, setLoading} = useContext(AppContext)
    

    async function fetchIdData(){
        setLoading(true)
        try{
            let url = `${urlBasedId}?blogId=${blogId}`
            const data = await fetch(url)
            const output = await data.json()
            setData(output.blog)
            setRelatedData(output.relatedBlogs)
        }
        catch(error){
            console.log("Wrong API Call")
            setData([])
            setRelatedData([])
        }
        setLoading(false)
    }
    useEffect(()=>{
        fetchIdData();
    },[location.pathname])
  return (
    <div>
        <Header></Header>
        <div className='flex flex-col justify-center items-center'>
            
        <div className='m-5 flex flex-col justify-center items-center'>
            {
                loading ? <Spinner></Spinner> : Object.values(data).length>0 ? <BlogsByID data={data} relatedData={relatedData}></BlogsByID> :<p>No Blogs Found</p>
            }
        </div>
        </div>  
    </div>    
  )
}
