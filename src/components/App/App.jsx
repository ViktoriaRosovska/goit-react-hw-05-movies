import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Container, MainContainerApp } from './App.styled';
import { useState } from 'react';
import { darkTheme, lightTheme, globalTheme } from 'styles/theme';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { NotFound } from 'components/NotFound/NotFound';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const themeStyle = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeStyle}>
      <MainContainerApp theme={themeStyle} globalTheme={globalTheme}>
        <Container theme={themeStyle} globalTheme={globalTheme}>
          <Routes>
            <Route
              path="/"
              element={
                <SharedLayout
                  toggleTheme={toggleTheme}
                  globalTheme={globalTheme}
                  theme={themeStyle}
                />
              }
            >
              <Route
                index
                path="/"
                element={<Home theme={themeStyle} globalTheme={globalTheme} />}
              />
              <Route path="/movies" element={<Movies theme={themeStyle} />} />
              <Route
                path="/movies/:movieId"
                element={<MovieDetails theme={themeStyle} />}
              >
                <Route path="cast" element={<Cast theme={themeStyle} />} />
                <Route
                  path="reviews"
                  element={<Reviews theme={themeStyle} />}
                />
              </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer
            icon={false}
            position="top-center"
            autoClose={2000}
            hideProgressBar={true}
            theme="colored"
          />
        </Container>
      </MainContainerApp>
    </ThemeProvider>
  );
}
