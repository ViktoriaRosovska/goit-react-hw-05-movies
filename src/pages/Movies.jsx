import { useDebounce } from 'hooks/useDebaunce';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { searchMovie } from 'services/API_themoviedb';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  // const [page, setPage] = useState(1);
  const onChangeURL = e => {
    // console.log(e.target.value.trim().toLowerCase());
    setSearchQuery(e.target.value.trim().toLowerCase());
  };

  // const onLoadMore = () => {
  //   setPage(prevPage => prevPage + 1);
  // };

  const search = useDebounce(searchQuery, 1000);

  useEffect(() => {
    searchMovie(search).then(({ results }) => {
      // console.log(results);
      // setMovies(prevMovies => [...prevMovies, ...results]);
      setMovies(results);
    });
  }, [search]);

  return (
    <main>
      <h1>Movie</h1>

      <form>
        <input type="text" onChange={onChangeURL} value={searchQuery} />
      </form>
      <ul>
        {movies &&
          movies.map(({ title, id, poster_path }) => {
            return (
              <li key={id}>
                <Link to={`${id}`}>
                  <h2>{title}</h2>
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                    alt={title}
                  />
                </Link>
              </li>
            );
          })}
      </ul>
      {/* <button onClick={onLoadMore}>Load more</button> */}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Review</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
