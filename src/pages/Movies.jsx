import { Link, Outlet } from 'react-router-dom';

export const Movies = () => {
  return (
    <main>
      <h1>Movie</h1>
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
