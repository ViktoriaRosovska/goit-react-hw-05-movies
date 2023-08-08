import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/API_themoviedb';
import { PageTitle } from '../Home/Home.styled';

import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MovieList } from 'components/MovieList';

const Movies = ({ theme }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams();
  const querySearchParams = params.get('query') ?? '';

  const onFormSearch = searchQuery => {
    if (searchQuery === '') {
      return toast.error(`Plese, enter the query and try again`);
    }
    setParams({ query: searchQuery });
  };

  useEffect(() => {
    try {
      if (!querySearchParams) {
        return;
      }

      searchMovie(querySearchParams).then(({ results }) => {
        if (querySearchParams && results.length === 0) {
          return toast.error(
            `Oops, there are no movies with query ${querySearchParams}`
          );
        }
        setMovies(results);
      });
    } catch (error) {
      return toast.error(
        `There is some error in the application: "${error.message}"`
      );
    } finally {
      setIsLoading(false);
    }
  }, [querySearchParams]);

  return (
    <>
      <PageTitle theme={theme}>Search movie</PageTitle>
      <SearchForm theme={theme} params={params} onFormSearch={onFormSearch} />
      {isLoading && <Loader />}
      <MovieList theme={theme} item={movies} />
      <Outlet />
    </>
  );
};

Movies.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default Movies;
