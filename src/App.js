import React, { useState,useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./Cards/Cards";
import Filters from "./Filters/Filters";
const App=()=> {
  console.log('render')
   const[data,setData]=useState();
   const [pageNumber,setPageNumber]=useState(1);
  //  setData(result);
  let api=`https://rickandmortyapi.com/api/character?page=${pageNumber}`
  useEffect(()=>{
       const fetchData=async ()=>{
          const dataFetch=await fetch(api).then((res)=>res.json());
          setData(dataFetch.results);
          console.log(dataFetch);
       }
       fetchData();
  },[api])
  return (

    <div className="App">
      <h1 className="text-center ubuntu my-5">Ricky and Morty <span className="text-primary">Wiki</span></h1>
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
    </div>
  );
}

export default App;
