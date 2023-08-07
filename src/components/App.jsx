import { Routes, Route , Link} from "react-router-dom";
import Home from './Home/Home'


export const App = () => {


  return (
    <div> 
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<div>movies</div>} />

      </Routes>
    </div>
  );
};
