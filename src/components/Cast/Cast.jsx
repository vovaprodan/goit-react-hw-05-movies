import { fetchCreditsApi  } from '../../servise/movies.api';
import { useEffect, useState } from "react";


const Cast = ({castId}) => {
    const [actors, setActors] = useState([]);
    
    useEffect(() => {
         
        fetchCreditsApi(castId).then(resp => {
            setActors(resp.cast)
           
            

    })
     }, [castId]);
    
   
  

    return <ul>
        {actors.map(actor => {
            return <li key={actor.id}> 
                {!actor.profile_path ? '' : <img width={100} src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.original_name} />}
                <p>{actor.original_name}</p>
                <p>Character: {actor.character}</p>
            </li>  
           
        })

        }
       
    </ul>
}
export default Cast;