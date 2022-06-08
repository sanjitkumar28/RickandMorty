import React, { useState,useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./Cards/Cards";
import Filters from "./Filters/Filters";
import Pagination from './Pagination/Pagination';
import Search from './Search/Search';
const App=()=> {
  console.log('render')
   const[data,setData]=useState();
   const [pageNumber,setPageNumber]=useState(1);
   const [search,setSearch]=useState('');
   let info;
  //  setData(result);
  let api=`https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}`
  useEffect(()=>{
       const fetchData=async ()=>{
          const dataFetch=await fetch(api).then((res)=>res.json());
          info=dataFetch.info;
          console.log('info datas',info);
          setData(dataFetch.results);
          console.log(dataFetch);
       }
       fetchData();
  },[api])
  return (

    <div className="App">
      <h1 className="text-center ubuntu my-5">Ricky and Morty <span className="text-primary">Wiki</span></h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber}/>
      <div className="container">
          <div className="row">
                <div className="col-3">
                   <Filters/>
                </div>
           <div className="col-8">
              <div className="row">
                <Cards data={data}/>
              </div>
           </div>
         </div>
    </div>
    <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  );
}

export default App;
