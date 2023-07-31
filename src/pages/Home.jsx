import { useEffect, useState } from 'react';
import { getMoviesTrending } from '../services/API_themoviedb';
// import { useLocation } from 'react-router-dom';
import { SimpleCarousel } from './SimpleCarousel';
import { Link } from 'react-router-dom';

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
      <SimpleCarousel trending={trending} />
      <ul className="gridList">
        {trending.map(({ title, id, poster_path, release_date }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                  alt={title}
                />
                <h2>{title}</h2>
                <p>Release date: {release_date}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
