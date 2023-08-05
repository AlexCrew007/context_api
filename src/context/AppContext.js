import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const  AppContext = createContext();

export default function AppContextProvider({children}){
    
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(null)

    async function fetchData (page){
        const url = `${baseUrl}?page=${page}`
        setLoading(true)
        try{
            const urlData = await fetch(url);
            const output = await urlData.json();
            console.log(output)
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

    function handelPageChange(page){    
        setPage(page);
        fetchData(page);
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