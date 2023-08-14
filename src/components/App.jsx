import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { StyledNavLink, Nav } from "./App.styled";
import { BallTriangle } from  'react-loader-spinner'

// import  Home  from './pages/Home'
// import Movies from './pages/Movies';
// import MovieDetails from './pages/MovieDetails';
// import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));


export const App = () => {
  return (
    <div> 
       <Suspense fallback={<div><BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
          /></div>}>
      <Nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </Nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies />} ></Route>
        <Route path="/movies/:moviesId/*" element={<MovieDetails/>} />
        <Route path="*" element={<NotFound/>} />

        </Routes>
        </Suspense>
    </div>
  );
};
