import PropTypes from 'prop-types';
import {
  About,
  AboutLinks,
  DetailsInfo,
  DetailsWrapper,
} from 'pages/MovieDetails/MovieDetails.styled';
import Image from './Image/Image';

const MovieDetailsWrapper = ({ theme, movieDetails }) => {
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
    <DetailsWrapper theme={theme}>
      <Image
        id={id}
        path={poster_path}
        name={title}
        style={{ width: '300px', height: '450px' }}
      />
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
          <About theme={theme} to="cast">
            Cast
          </About>
          <About theme={theme} to="reviews">
            Reviews
          </About>
        </AboutLinks>
      </DetailsInfo>
    </DetailsWrapper>
  );
};

MovieDetailsWrapper.propTypes = {
  theme: PropTypes.object.isRequired,
  movieDetails: PropTypes.object.isRequired,
};
export { MovieDetailsWrapper };
