import { Container, MainContainer } from 'components/App/App.styled';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/API_themoviedb';
import { ContainerDetails } from './MovieDetails.styled';

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
  const { title, id, release_date, poster_path } = movieDetails;
  return (
    <div>
      <MainContainer>
        <ContainerDetails>
          <Link to={backLinkHref}>Go to previous page</Link>

          {title}
          {id}
          {release_date}
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={title}
          />
          <Link to="cast" state={{ from: `/movies/${id}` }}>
            Cast
          </Link>
          <Link to="reviews" state={{ from: `/movies/${id}` }}>
            Reviews
          </Link>
        </ContainerDetails>
      </MainContainer>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
