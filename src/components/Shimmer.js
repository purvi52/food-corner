import React from 'react'

const Shimmer = () => {
  return (
    <>
    <div className='shimmer-search'>
    <input type="text"/>
     <button>search</button>
    </div>
    
    <div className='restaurant-list'>
   
        {Array(10).fill("").map((e,index)=><div key={index}className='shimmer-card'></div>)}
    </div>
    </>
    
  )
}

export default Shimmer; 