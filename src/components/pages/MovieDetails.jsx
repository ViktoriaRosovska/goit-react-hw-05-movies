import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/API_themoviedb';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  console.log(movieId);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  console.log(backLinkHref);
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
      <Link to={backLinkHref}>Go to previous page</Link>

      {title}
      {id}
      <Link to="cast" state={{ from: `/movies/${id}` }}>
        Cast
      </Link>
      <Link to="reviews" state={{ from: `/movies/${id}` }}>
        Reviews
      </Link>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
