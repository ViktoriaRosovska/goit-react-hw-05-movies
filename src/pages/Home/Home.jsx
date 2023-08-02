import { useEffect, useState } from 'react';
import { getMoviesTrending } from '../../services/API_themoviedb';
import { SimpleCarousel } from '../../components/SimpleCarousel/SimpleCarousel';
import { Link } from 'react-router-dom';
import { Container, MainContainer } from 'components/App/App.styled';
import { GridList, PageTitle } from './Home.styled';

export const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getMoviesTrending().then(({ results }) => {
      setTrending(results);
    });
  }, []);

  return (
    <main>
      <MainContainer>
        <Container>
          <PageTitle>Trending today</PageTitle>
          <SimpleCarousel trending={trending} />
          <GridList>
            {trending.map(({ title, id, poster_path }) => {
              return (
                <li key={id}>
                  <Link to={`/movies/${id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                      alt={title}
                    />
                    <h2>{title}</h2>
                  </Link>
                </li>
              );
            })}
          </GridList>
        </Container>
      </MainContainer>
    </main>
  );
};
