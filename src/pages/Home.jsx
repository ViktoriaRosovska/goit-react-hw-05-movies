import { useEffect, useState } from 'react';
import { getMoviesTrending } from '../services/API_themoviedb';
import { Link } from 'react-router-dom';
export const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getMoviesTrending().then(({ results }) => {
      setTrending(results);
    });
  }, []);

  // const movieCredits = getMovieCredits('496450').then(({ cast }) =>
  //   console.log(cast)
  // );
  // console.log(movieCredits);
  // const movieReviews = getMovieReviews('414906').then(data =>
  //   console.log(data)
  // );
  // console.log(movieReviews);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
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
      </ul>
    </main>
  );
};
