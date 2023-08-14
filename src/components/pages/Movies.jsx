import { fetchSearchApi } from '../../servise/movies.api';
import { useState, useEffect } from "react";
import { BallTriangle } from 'react-loader-spinner';
import { Link, useSearchParams, useLocation } from "react-router-dom";


const Movies = () => {
    // const [query, setQuery] = useState('');
    const [films, setFilms] = useState([]);
  const [SearchParams, setSearchParams] = useSearchParams();
  const searchString = SearchParams.get('search');
  const location = useLocation();
  const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
 
    
    useEffect(() => {
          if(!searchString) {return}
        fetchSearchApi(searchString).then(resp => {
            setFilms(resp.results)

    }).catch(error => setError(error.message))
      .finally(() => setLoading(false))
     }, [searchString]);
    
     const onSubmitForm = e => {
    e.preventDefault();
    const form = e.currentTarget;
       const searchValue = e.currentTarget.name.value;
       setSearchParams({search :searchValue })
         form.reset();
  }

  return <>
      {error && <h1>{error}</h1>}
        <form onSubmit={onSubmitForm} >
    <input
      type="text"
          name="name"
          defaultValue={searchString ?? ''}
      autoComplete="off"
      autoFocus
          placeholder="Search movies"
            />
            <button type="submit" >
      <span>Search</span>
    </button>
    </form>
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
            {films.map(movies => {
                return <li key={movies.id}>
                    <Link state={{from: location }} to={`${movies.id}`}>{movies.title ?? movies.name}</Link>
                    </li>
           })

           }
    </ul>
    </>
}
export default Movies;