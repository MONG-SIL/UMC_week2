import { useEffect} from "react";


function GetMovies ({movieList, setLoading, setMovies}) {
    const getMovies = () => {
        setMovies(movieList.results);
        setLoading(false);
       }
        useEffect(() => {getMovies();} , []); //여기 getmovies에 () 넣어야 작동 
    return
}

export default GetMovies;



/*const getMovies = async() => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`   API 링크에서 받아오는 방식
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  */