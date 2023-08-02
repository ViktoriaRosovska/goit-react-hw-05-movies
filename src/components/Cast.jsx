import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/API_themoviedb';
import { MainContainer } from './App/App.styled';
import { ContainerCast } from './Cast.styled';
import { GridList } from 'pages/Home/Home.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const onComponentHide = () => {
    return navigate(`${location.state.from}`, { replace: true });
  };

  useEffect(() => {
    getMovieCredits(movieId).then(({ cast }) => {
      console.log(cast);

      setActors(cast);
    });
  }, [movieId]);

  return (
    <MainContainer>
      <ContainerCast>
        <div>Актерский состав</div>
        <button onClick={onComponentHide}>X</button>
        <GridList>
          {actors &&
            actors.map(({ character, name, id, profile_path }) => {
              return (
                <li key={id}>
                  {profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
                      alt={name}
                    />
                  ) : (
                    <div
                      style={{
                        width: '300px',
                        height: '450px',
                        borderColor: '1px solid green',
                        backgroundColor: 'gray',
                      }}
                    >
                      Image not found
                    </div>
                  )}
                  <h2>{character}</h2>
                  <h3>{name}</h3>
                </li>
              );
            })}
        </GridList>
      </ContainerCast>
    </MainContainer>
  );
};

export { Cast };
