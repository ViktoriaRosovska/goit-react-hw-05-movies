import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import MovieDetails from './pages/MovieDetails';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<div>Cast</div>} />
            <Route path="reviews" element={<div>Reviews</div>} />
          </Route>
        </Route>

        <Route path="*" element={<div>Nothing not found</div>} />
      </Routes>
    </div>
  );
};
