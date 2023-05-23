import React from 'react'
import './css/searchbar.css'
const Searchbar = ({ onSearch }) => {


  return (
<div>
        <input type="text" className='search' name="" id="" />
      
  
      <button className='sbtn' onClick={onSearch} >search</button>
      </div>
  )
}

export default Searchbar