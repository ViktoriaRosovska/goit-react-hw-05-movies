import imgNotFound from '../../img/imgnotfound.jpg';
import { ImageWrapper } from './Image.styled';

function Image({ path, name, style }) {
  return (
    <ImageWrapper style={style}>
      <img
        src={path ? `https://image.tmdb.org/t/p/w300/${path}` : imgNotFound}
        alt={name}
      />
    </ImageWrapper>
  );
}

export default Image;
