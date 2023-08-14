import { fetchReviewsApi  } from '../../servise/movies.api';
import { useEffect, useState} from "react";


const Reviews = ({reviewsId}) => {
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
         
        fetchReviewsApi(reviewsId).then(resp => {
            setReviews(resp.results)

    })
     }, [reviewsId]);
    
   
  

    return <div>
        {reviews.length > 0 ? (<ul>
                {reviews.map(review => {
                    return <li key={review.id}> 
                        <h2>Author:{review.author}</h2>
                        <p>{review.content}</p>
                </li>
            }) }
        </ul>) : (
                <p>We don't have any reviews for this moies</p>
            )}
       
    </div>
}
export default Reviews;