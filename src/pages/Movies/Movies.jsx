import imgNotFound from '../../img/imgnotfound.jpg';
import { MainContainer } from 'components/App/App.styled';
import { useDebounce } from 'hooks/useDebaunce';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/API_themoviedb';
import { GridList, PageTitle } from '../Home/Home.styled';
import { ContainerMovie, MovieSearch, SearchWrapper } from './Movies.styled';
import SearchIcon from '@mui/icons-material/Search';
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
      <MainContainer>
        <ContainerMovie>
          <PageTitle>Search movie</PageTitle>
          <SearchWrapper>
            <MovieSearch
              type="text"
              onChange={onChangeURL}
              value={params.get('query') ?? ''}
              placeholder="Search movie..."
            />
            <div className="inputSearch">
              <SearchIcon />
            </div>
          </SearchWrapper>

          <GridList>
            {movies &&
              movies.map(({ title, id, poster_path }) => {
                return (
                  <li key={id}>
                    <Link to={`${id}`} state={{ from: location }}>
                      {poster_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                          alt={title}
                        />
                      ) : (
                        <div
                          style={{
                            width: '260px',
                            height: '390px',
                          }}
                        >
                          <img src={imgNotFound} alt="not found" />
                        </div>
                      )}
                      <h2>{title}</h2>
                    </Link>
                  </li>
                );
              })}
          </GridList>
          <Outlet />
        </ContainerMovie>
      </MainContainer>
    </main>
  );
};
