import PropTypes from 'prop-types';
import imgNotFound from '../../img/imgnotfound.jpg';

import { useDebounce } from 'hooks/useDebaunce';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/API_themoviedb';
import { GridList, PageTitle } from '../Home/Home.styled';
import { MovieSearch, SearchWrapper } from './Movies.styled';
import SearchIcon from '@mui/icons-material/Search';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = ({ theme }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const [movies, setMovies] = useState([]);

  const search = useDebounce(searchQuery, 1000);
  const location = useLocation();

  const [params, setParams] = useSearchParams();
  const querySearchParams = params.get('query');

  const onChangeURL = e => {
    setSearchQuery(e.target.value.trim().toLowerCase());
    setParams({ query: e.target.value });
  };

  useEffect(() => {
    try {
      if (searchQuery === '' && querySearchParams !== null) {
        setSearchQuery(querySearchParams);
      }

      searchMovie(search).then(({ results }) => {
        setMovies(results);
        console.log(results.length);
        if (search && results.length === 0) {
          return toast.error(
            `Oops, there are no movies with query ${searchQuery}`
          );
        }
      });
    } catch (error) {
      return toast.error(
        `There is some error in the application: "${error.message}"`
      );
    } finally {
      setIsLoading(false);
    }
  }, [search, querySearchParams, searchQuery]);

  return (
    <>
      <PageTitle theme={theme}>Search movie</PageTitle>
      <SearchWrapper theme={theme}>
        <MovieSearch
          theme={theme}
          type="text"
          onChange={onChangeURL}
          value={params.get('query') ?? ''}
          placeholder="Search movie..."
        />
        <div className="inputSearch">
          <SearchIcon />
        </div>
      </SearchWrapper>
      {isLoading && <Loader />}
      <GridList theme={theme}>
        {movies &&
          movies.map(({ title, id, poster_path }) => {
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                      alt={title}
                    />
                  ) : (
                    <div
                      style={{
                        width: '260px',
                        height: '390px',
                        marginBottom: '20px',
                      }}
                    >
                      <img src={imgNotFound} alt="not found" />
                    </div>
                  )}
                  <h2>{title}</h2>
                </Link>
              </li>
            );
          })}
      </GridList>

      <Outlet />
    </>
  );
};

Movies.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default Movies;
