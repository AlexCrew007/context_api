import { Pagination } from './components/Pagination';
import { Blogs } from './components/Blogs';
import { Header } from './components/Header';
import './App.css';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';


function App() {
  
  const {fetchData} = useContext(AppContext);
  useEffect(()=>{
    fetchData();
  },[])

  
  return (
    <div>
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  );
}

export default App;
