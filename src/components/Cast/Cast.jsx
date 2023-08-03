import PropTypes from 'prop-types';
import imgNotFound from '../../img/imgnotfound.jpg';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/API_themoviedb';
import { GridList } from 'pages/Home/Home.styled';
import CloseIcon from '@mui/icons-material/Close';
import {
  CharacterName,
  CharacterTitle,
  CloseButton,
  CollapseTitle,
} from './Cast.styled';

const Cast = ({ theme }) => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const onComponentHide = () => {
    return navigate(`${location.state.from}`, { replace: true });
  };

  useEffect(() => {
    getMovieCredits(movieId).then(({ cast }) => {
      setActors(cast);
    });
  }, [movieId]);

  return (
    <>
      <CloseButton onClick={onComponentHide} theme={theme}>
        <CloseIcon />
      </CloseButton>
      <CollapseTitle theme={theme}>Cast </CollapseTitle>
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
                      width: '260px',
                      height: '390px',
                      marginBottom: '20px',
                    }}
                  >
                    <img src={imgNotFound} alt="not found" />
                  </div>
                )}
                <CharacterTitle className="character" theme={theme}>
                  {character}
                </CharacterTitle>
                <CharacterName theme={theme}>{name}</CharacterName>
              </li>
            );
          })}
      </GridList>
    </>
  );
};

Cast.propTypes = {
  theme: PropTypes.object,
};

export default Cast;
