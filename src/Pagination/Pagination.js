import React from 'react'

const Pagination = ({pageNumber,setPageNumber}) => {
  const prevPage=()=>{
       if(pageNumber>1)
        setPageNumber(pageNumber-1);
  }
  const nextPage=()=>{
    setPageNumber(pageNumber+1)
  }
  return (
    <div className='d-flex justify-content-center my-4'>
         <button onClick={prevPage} className="btn btn-primary mx-2">Prev</button>
         <button onClick={nextPage} className="btn btn-primary mx-2">Next</button>
    </div>
  )
}

export default Pagination
