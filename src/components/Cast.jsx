import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/API_themoviedb';

const Cast = ({ stateBtn }) => {
  const [showBtn, setShowBtn] = useState(true);
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  const onComponentHide = () => {
    setShowBtn(false);
  };

  useEffect(() => {
    getMovieCredits(movieId).then(({ cast }) => {
      console.log(cast);

      setActors(cast);
    });
    return setShowBtn(true);
  }, [movieId, setShowBtn]);

  return (
    showBtn && (
      <div>
        <div>Актерский составй</div>
        <button onClick={onComponentHide}>Свернуть</button>
        <ul>
          {actors &&
            actors.map(({ character, name, id, profile_path }) => {
              return (
                <li key={id}>
                  <h2>{character}</h2>
                  <h3>{name}</h3>
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
                </li>
              );
            })}
        </ul>
      </div>
    )
  );
};

export { Cast };
