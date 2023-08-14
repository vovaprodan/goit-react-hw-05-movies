import Cast from '../Cast/Cast'
import Reviews from '../Reviews/Reviews'
import {Routes, Route , useParams, Link, useLocation } from "react-router-dom";
import { fetchDetailsApi } from '../../servise/movies.api';
import {  useEffect, useRef, useState } from "react";
import { BallTriangle } from 'react-loader-spinner';
import { DivDetails, DivInfo, Li, StyledLink } from './MovieDetails.styled';

const MovieDetails = () => {
  const [films, setFilms] = useState([]);
  const [generes, setGeneres] = useState([]);
  const { moviesId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
   const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  

  useEffect(() => {
        fetchDetailsApi(moviesId).then(resp => {
          setFilms(resp);
          setGeneres(resp.genres)
        
        }).catch(error => setError(error.message))
      .finally(() => setLoading(false))
    
  }, [moviesId]);
  
  return <>
    {error && <h1>{error}</h1>}
    <StyledLink to={backLink.current}>{'<- Go back'}</StyledLink>
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
    <DivDetails>
      {!films.poster_path ? '' : <img src={`https://image.tmdb.org/t/p/w200/${films.poster_path}`} alt={films.title}/>}
    <div>
      <h2>{films.title ?? films.name}</h2>
      <h3>Overview</h3>
    <p>{films.overview}</p>
    <h3>Generes</h3>
      <ul>
        { generes.map(film => {
          return <Li key={film.id}>{film.name}</Li>
        })}
      </ul>
    </div>
    </DivDetails>
    <DivInfo>
      <h4>Additional information</h4>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
      
       <Routes>
        <Route path="cast" element={<Cast castId={moviesId} />} />
        <Route path="reviews" element={<Reviews reviewsId={moviesId} />} ></Route>
      </Routes>
      </DivInfo>
    </>
}
export default MovieDetails;