import React from 'react'
import styles from './Cards.module.scss'
const Cards = ({data}) => {
console.log('result inside card',data);
// let {name}=data;
  return (
        <>
            {
                data?data.map((item)=>{
                    return(
                       <div key ={item.id} className='col-4 position-relative'>
                              <div className={`${styles.cards}`}>
                                <img src={item.image} alt="Charachter" className='img-fluid' />
                                <div className='fs-4 fw-bold mb-4'>{item.name}</div>
                                <div className="">
                                <div className="fs-6">Last Location</div>
                                  <div className="fs-6">{item.location.name}</div>
                                </div>
                                <div className={`${styles.badge} badge bg-secondary position-absolute`}>
                                     Alive
                                </div>
                              </div>
                       </div>
                    )
                }):(
                    <div className="">Loading....</div>
                )
            }
        </>
           
        
  )
}

export default Cards
