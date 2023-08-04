import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/API_themoviedb';
import {
  About,
  AboutLinks,
  DetailsInfo,
  DetailsWrapper,
  GoBackLink,
} from './MovieDetails.styled';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const MovieDetails = ({ theme }) => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieDetails(movieId).then(results => {
      setMovieDetails(results);
    });
  }, [movieId]);

  const {
    title,
    id,
    release_date,
    poster_path,
    production_countries,
    vote_average,
    overview,
    original_language,
    budget,
    homepage,
  } = movieDetails;
  const prod = production_countries?.map(el => el.name).join(', ');
  return (
    <div>
      <GoBackLink to={backLinkHref} theme={theme}>
        <ArrowBackIcon /> Go to previous page
      </GoBackLink>
      <DetailsWrapper theme={theme}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={title}
          />
        </div>
        <DetailsInfo theme={theme}>
          <h2>"{title}"</h2>
          <p>
            Release date: <b>{release_date}</b>
          </p>
          <p>
            Productions countries: <b>{prod}</b>
          </p>
          <p>
            Rating: <b>{vote_average}</b>
          </p>
          <p>
            <b>Overview:</b> {overview}
          </p>
          <p>
            Original language: <b>{original_language}</b>
          </p>
          <p>
            <b>Budget:</b> {budget}$
          </p>
          <p>
            Home page:{' '}
            <a
              href={homepage}
              target="_blank"
              rel="noreferrer noopenner"
              className="homepage"
            >
              {homepage}
            </a>
          </p>
          <AboutLinks theme={theme}>
            {' '}
            <About theme={theme} to="cast" state={{ from: `/movies/${id}` }}>
              Cast
            </About>
            <About theme={theme} to="reviews" state={{ from: `/movies/${id}` }}>
              Reviews
            </About>
          </AboutLinks>
        </DetailsInfo>
      </DetailsWrapper>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
