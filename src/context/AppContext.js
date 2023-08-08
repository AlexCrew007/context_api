import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useLocation } from "react-router-dom";



export const  AppContext = createContext();

export default function AppContextProvider({children}){
    
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(null)
    const location = useLocation();


    async function fetchData (page=1, tag=null, category=null ){

        var url = `${baseUrl}?page=${page}`
        if(tag){
            var url = `${baseUrl}?page=${page}&tag=${tag}`;
        }
        else if(category){
            var url = `${baseUrl}?page=${page}&category=${category}`;
        }
        setLoading(true)
        try{
            const urlData = await fetch(url);
            const output = await urlData.json();
            setPosts(output.posts);
            setPage(output.page);
            setTotalPage(output.totalPages)
        }
        catch(error){
            console.log("Error in api call")
            setPage(1);
            setPosts([]);
            setTotalPage(null);
        }
        setLoading(false);
    }

    function handelPageChange(page,tag,category){ 
        setPage(Number(page))
        if(location.pathname.includes('tag')){
            const tag = location.pathname.split('/').at(-1).replaceAll("-"," ");
            fetchData(page,tag,null)
        }
        else if (location.pathname.includes('categories')){
            const category=location.pathname.split('/').at(-1).replaceAll("-"," ");
            fetchData(page,null,category)
        }
        else{
            fetchData(page)
        }
       
    }
   
    const values = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPage,
        setTotalPage,
        fetchData,
        handelPageChange,
    };

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}