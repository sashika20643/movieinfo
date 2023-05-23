import React from 'react'
import './css/moviecontainer.css'
import Namebox from './namebox'
const Moviecontainer = ({movied}) => {
  const imglink="https://image.tmdb.org/t/p/w1280/"+movied.backdrop_path;
  var mtitle="Movie not found!"
   if(movied.title){
  mtitle=movied.title;
  }

  return (
    <div>
    <div className='mcont'>
      </div>
    <div className='moviebox'>
  <h2>mtitle</h2>
        <div className="row1">
            <img src={imglink} alt="" className='mimage'/>
            <Namebox/>
        </div>

<div className="overview">
    
</div>

    </div>

    </div>
  )
}

export default Moviecontainer


