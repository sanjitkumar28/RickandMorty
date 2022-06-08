import React from 'react'
import styles from './Search.module.scss'
const Search = ({setSearch,setPageNumber}) => {
  const handleChange=(event)=>{
    setSearch(event.target.value);
    setPageNumber(1);
  }
  const handleClick=(event)=>{
    event.preventDefault();
  }
  return (
   <form className='d-flex justify-content-center mb-5'>
        <input placeholder='Search For characters' type="text" className={styles.input} onChange={handleChange}/>
        <button className='btn btn-primary fs-5 ' onClick={handleClick}>Search</button>
   </form>
  )
}

export default Search
