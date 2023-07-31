import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/API_themoviedb';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const onComponentHide = () => {
    return navigate(`${location.state.from}`, { replace: true });
  };

  useEffect(() => {
    getMovieReviews(movieId).then(({ results }) => {
      console.log(results);
      setReviews(results);
    });
  }, [movieId]);

  return (
    <div>
      <div>Отзывы посетителей</div>
      <button onClick={onComponentHide}>X</button>
      <ul>
        {reviews &&
          reviews.map(({ content, id, author, url }) => {
            return (
              <li key={id}>
                <h2>{author}</h2>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export { Reviews };
