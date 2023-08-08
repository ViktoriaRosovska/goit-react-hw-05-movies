import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import Image from './Image/Image';

const MovieItem = ({ id, poster_path, title }) => {
  const location = useLocation();
  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <Image
          path={poster_path}
          name={title}
          style={{ width: '260px', height: '390px' }}
        />
        <h2 style={{ marginTop: '20px' }}>{title}</h2>
      </Link>
    </li>
  );
};

MovieItem.propType = {
  id: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export { MovieItem };
