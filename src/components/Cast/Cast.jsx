import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/API_themoviedb';
import { GridList } from 'pages/Home/Home.styled';
import CloseIcon from '@mui/icons-material/Close';
import {
  CharacterName,
  CharacterTitle,
  CloseLink,
  CollapseTitle,
} from './Cast.styled';
import Image from 'components/Image/Image';

const Cast = ({ theme }) => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(({ cast }) => {
      setActors(cast);
    });
  }, [movieId]);

  return (
    <>
      <CloseLink theme={theme} to={`/movies/${movieId}`}>
        <CloseIcon />
      </CloseLink>
      <CollapseTitle theme={theme}>Cast </CollapseTitle>
      <GridList>
        {actors &&
          actors.map(({ character, name, id, profile_path }) => {
            return (
              <li key={id}>
                <Image
                  path={profile_path}
                  name={name}
                  style={{ width: '260px', height: '390px' }}
                />

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
