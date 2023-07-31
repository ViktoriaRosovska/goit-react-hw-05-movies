import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/API_themoviedb';

const Reviews = () => {
  const [showBtn, setShowBtn] = useState(true);
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const onComponentHide = () => {
    setShowBtn(false);
  };

  useEffect(() => {
    getMovieReviews(movieId).then(({ results }) => {
      console.log(results);
      setReviews(results);
    });

    return setShowBtn(true);
  }, [setShowBtn, movieId]);

  return (
    showBtn && (
      <div>
        <div>Отзывы посетителей</div>
        <button onClick={onComponentHide}>Свернуть</button>
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
    )
  );
};
export { Reviews };
