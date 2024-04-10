import { useState } from "react";

function Movie ({title, img, review, rate}) {
    const [mouseOn, setMouseOn] = useState(false); 
    const onMouse = () => {
        setMouseOn(true);
        //setMouseOn((current) => current = !current); // 마우스가 올라오면 true 내려가면 false
    }
    const outMouse = () => {
        setMouseOn(false);
    }
 
    return(
        <div className='movie'> 
            <div className = "wrap_img" onMouseEnter={onMouse} onMouseLeave={outMouse}>
                <img className="movie__img" src={`https://image.tmdb.org/t/p/w500${img}`}/>
                {mouseOn ? <div className="movie__review">{review}</div> : null }
            </div>
            <div className="wrap_title">
                <h1 className="movie__title">{title}</h1> 
                <div className="rating">{rate}</div>
            </div>
             
            
        </div>
    )
}


export default Movie;

