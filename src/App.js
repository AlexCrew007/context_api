import './App.css';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import { Home } from './pages/Home';
import { TagPage } from './pages/TagPage';
import { BlogPage } from './pages/BlogPage';
import { CategoryPage } from './pages/CategoryPage';

function App() {
  
  const {fetchData} = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(()=>{
    const page = searchParams.get('page') ?? 1;

    if(location.pathname.includes('tag')){
      const tag = location.pathname.split('/').at(-1).replaceAll("-"," ");
      fetchData(Number(page),tag,null);
    }
    else if(location.pathname.includes('categories')){
      const category=location.pathname.split('/').at(-1).replaceAll("-"," ");
      fetchData(Number(page),null,category)
    }
    else{
      fetchData(Number(page));
    }
    fetchData(page)
   
  },[location.pathname, location.search])

  
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home></Home>} />
      <Route path='/tag/:tag' element={<TagPage></TagPage>} />
      <Route path='/blog/:blogId' element={<BlogPage></BlogPage>}/>
      <Route path='/categories/:category' element={<CategoryPage></CategoryPage>}/>
    </Routes>
    </div>
  );
}

export default App;
