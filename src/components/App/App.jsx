import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Container, MainContainerApp } from './App.styled';
import { useState } from 'react';
import { darkTheme, lightTheme, globalTheme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

export function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <MainContainerApp
        theme={theme === 'light' ? lightTheme : darkTheme}
        globalTheme={globalTheme}
      >
        <Container
          theme={theme === 'light' ? lightTheme : darkTheme}
          globalTheme={globalTheme}
        >
          <Routes>
            <Route
              path="/"
              element={
                <SharedLayout
                  toggleTheme={toggleTheme}
                  globalTheme={globalTheme}
                />
              }
            >
              <Route
                index
                path="/"
                element={
                  <Home
                    theme={theme === 'light' ? lightTheme : darkTheme}
                    globalTheme={globalTheme}
                  />
                }
              />
              <Route
                path="/movies"
                element={
                  <Movies theme={theme === 'light' ? lightTheme : darkTheme} />
                }
              />
              <Route
                path="/movies/:movieId"
                element={
                  <MovieDetails
                    theme={theme === 'light' ? lightTheme : darkTheme}
                  />
                }
              >
                <Route
                  path="cast"
                  element={
                    <Cast theme={theme === 'light' ? lightTheme : darkTheme} />
                  }
                />
                <Route
                  path="reviews"
                  element={
                    <Reviews
                      theme={theme === 'light' ? lightTheme : darkTheme}
                    />
                  }
                />
              </Route>
            </Route>

            <Route path="*" element={<div>Nothing not found</div>} />
          </Routes>
        </Container>
      </MainContainerApp>
    </ThemeProvider>
  );
}
