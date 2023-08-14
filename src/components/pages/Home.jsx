import { fetchMoviesApi } from '../../servise/movies.api'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BallTriangle } from  'react-loader-spinner'


const Home = () => {
    const [moviesApi, setMoviesApi] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
     useEffect(() => {
         fetchMoviesApi().then(resp => {
             setMoviesApi(resp.results)
    }).catch(error => setError(error.message))
      .finally(() => setLoading(false))
  }, []);

    return <>
        {error && <h1>{error}</h1>}
        <h1>Trending today</h1>
        {loading && <div><BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
          /></div>}
        <ul>
            {moviesApi.map(movies => {
                return <li key={movies.id}>
                    <Link to={`/movies/${movies.id}`}>{movies.title ?? movies.name}</Link>
                    
                    </li>
           })

           }
        </ul>
        
    </>
}
export default Home;