import { useDebounce } from 'hooks/useDebaunce';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/API_themoviedb';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');

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
    if (searchQuery === '' && querySearchParams !== null) {
      setSearchQuery(querySearchParams);
    }
    searchMovie(search).then(({ results }) => {
      setMovies(results);
    });
  }, [search, querySearchParams, searchQuery]);

  return (
    <main>
      <h1>Movie</h1>
      <input
        type="text"
        onChange={onChangeURL}
        value={params.get('query') ?? ''}
      />
      <ul>
        {movies &&
          movies.map(({ title, id, poster_path }) => {
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  <h2>{title}</h2>
                  {poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                      alt={title}
                    />
                  ) : (
                    <div
                      style={{
                        width: '300px',
                        height: '450px',
                        borderColor: '1px solid green',
                        backgroundColor: 'gray',
                      }}
                    >
                      Image not found
                    </div>
                  )}
                </Link>
              </li>
            );
          })}
      </ul>
      <Outlet />
    </main>
  );
};
