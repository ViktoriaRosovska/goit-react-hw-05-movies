import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/API_themoviedb';
import { GoBackLink } from './MovieDetails.styled';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MovieDetailsWrapper } from 'components/MoviDetailsWrapper';
import { useRef } from 'react';

const MovieDetails = ({ theme }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    getMovieDetails(movieId).then(results => {
      setMovieDetails(results);
    });
  }, [movieId]);

  if (!movieDetails) {
    return;
  }

  return (
    <div>
      <GoBackLink to={backLinkHref.current} theme={theme}>
        <ArrowBackIcon /> Go to previous page
      </GoBackLink>
      <MovieDetailsWrapper theme={theme} movieDetails={movieDetails} />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
MovieDetails.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default MovieDetails;
