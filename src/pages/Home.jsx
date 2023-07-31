import { useEffect, useState } from 'react';
import { getMoviesTrending } from '../services/API_themoviedb';
// import { useLocation } from 'react-router-dom';
import { SimpleCarousel } from './SimpleCarousel';

export const Home = () => {
  const [trending, setTrending] = useState([]);
  // const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/';
  useEffect(() => {
    getMoviesTrending().then(({ results }) => {
      setTrending(results);
    });
  }, []);

  return (
    <main>
      <h1>Trending today</h1>

      {/* <ul>
        {trending.map(({ title, id, poster_path }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                <h2>{title}</h2>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                  alt={title}
                />
              </Link>
            </li>
          );
        })}
      </ul> */}
      <SimpleCarousel trending={trending} />
    </main>
  );
};
