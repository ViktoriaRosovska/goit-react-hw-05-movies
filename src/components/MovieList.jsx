import PropTypes from 'prop-types';
import { GridList } from 'pages/Home/Home.styled';
import { MovieItem } from './MovieItem';

const MovieList = ({ theme, item }) => {
  return (
    <GridList theme={theme}>
      {item &&
        item.map(({ title, id, poster_path }) => {
          return (
            <MovieItem
              key={id}
              title={title}
              poster_path={poster_path}
              id={id}
            />
          );
        })}
    </GridList>
  );
};

MovieList.propType = {
  theme: PropTypes.object.isRequired,
  item: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export { MovieList };
