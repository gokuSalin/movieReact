import {useState, useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';


const API_URL = 'http://www.omdbapi.com/?apikey=2b67c4a9';
const App = ()=> {

  const [ movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies= async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect( ()=>{
    searchMovies('iron');
  },[]);

  return (
    <div className='app'>
      <h1>Movie Land</h1>
      <div className='search'>
        <input
          placeholder='Search For Movies'
          value={searchTerm}
          onChange={(e)=>{setSearchTerm(e.target.value)}}
        />
        <img src={SearchIcon}
          alt="search"
          onClick={()=>{searchMovies(searchTerm)}}
        />
      </div>
      {movies?.length>0?(
          <div className='container'>
          {movies.map((movie)=>(
            <MovieCard movie={movie}></MovieCard>
        ))}
      </div>
        ):(
          <div className='empty'>
            <h2>NO Movie Found</h2>
          </div>
        )
      }

    </div>
  );
}
// 2b67c4a9 - api key
export default App;
