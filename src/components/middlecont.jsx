import React ,{useEffect,useState} from 'react'
import './css/middle.css'
import './css/searchbar.css'
import Moviecontainer from './moviecontainer'
const Middlecont = () => {
  const[movie,setmovie]=useState({});
  
  const getMovie=async()=>{
    const url="https://api.themoviedb.org/3/search/movie?api_key=620350bb0173cd80a6e31eeb2b63391c&language=en-US&query=batman&page=1&include_adult=false"
    const respons= await fetch(url);
    const responsJson=await respons.json();
    setmovie(responsJson.results[0]);
    console.log(movie);

  }

  // const Search=()=>{
  //   useEffect(()=>{
  //     getMovie();
  //   },[]
  
  //   )
  // }

  return (
    <div className='middle'>
<div>
        <input type="text" className='search' name="" id="" />
      
  
      <button className='sbtn' onClick={getMovie} >search</button>
      </div>
     
<Moviecontainer movied={movie} />
    </div>
  )
}

export default Middlecont