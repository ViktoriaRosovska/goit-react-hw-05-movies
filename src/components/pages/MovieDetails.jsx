import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/API_themoviedb';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    getMovieDetails(movieId).then(results => {
      console.log(results);
      setMovieDetails(results);
    });
  }, [movieId]);
  console.log(movieDetails);
  const { title, id } = movieDetails;
  return (
    <div>
      {title}
      {id}
    </div>
  );
};

export default MovieDetails;
