import fetchMoviesApi from '../../servise/movies.api'
import { useState, useEffect } from "react";

const Home = () => {
    const [moviesApi, setMoviesApi] = useState([])
    
     useEffect(() => {
         fetchMoviesApi().then(resp => {
             setMoviesApi(resp.results)
    })
  }, []);

    return <>
        <h1>Trending today</h1>
        <ul>
            {moviesApi.map(movies => {
                return <li key={movies.id}>
                    <a href="https://www.themoviedb.org/">{movies.title ?? movies.name}</a>
                    </li>
           })

           }
        </ul>
        
    </>
}
export default Home;