import { useState } from 'react'
import { movieList } from './Movie_list';
import Movie from './Movie';
import GetMovies from './GetMovies';
import "./App.css" 

function App() {
  const [loading, setLoading] = useState(false);
  const [movies , setMovies] = useState([]); //state를 컴포넌트에 넘길 수 있음
  
  return (
    <>
    <GetMovies movieList={movieList} setMovies={setMovies} setLoading={setLoading}/>
    <div className='container'>
      {loading ? <h1>잠시만 기다려 주세요..!</h1> : <div className='movies'>{movies.map((item) => <Movie key={item.id}title={item.title} img={item.poster_path} review={item.overview} rate={item.vote_average}/>)  }</div> }
    </div>
    
    </>
    )
}

export default App;
