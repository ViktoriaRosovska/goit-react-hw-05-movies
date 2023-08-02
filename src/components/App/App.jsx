import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header/Header';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import { Cast } from 'components/Cast';
import { Reviews } from 'components/Reviews';
import { MainContainerApp } from './App.styled';

export const App = () => {
  return (
    <MainContainerApp>
      <div>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>

          <Route path="*" element={<div>Nothing not found</div>} />
        </Routes>
      </div>
    </MainContainerApp>
  );
};
