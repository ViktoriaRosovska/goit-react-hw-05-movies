import foxlogo from 'img/fox.png';
import PropTypes from 'prop-types';
import { HeaderLink, Logo, LogoText, Navigation } from './Header.styled';
import SearchIcon from '@mui/icons-material/Search';

function Header({ theme }) {
  return (
    <Navigation theme={theme}>
      <Logo theme={theme}>
        <img src={foxlogo} alt="logo fox" />
        <LogoText theme={theme}>FoxyMovies</LogoText>
      </Logo>
      <HeaderLink theme={theme} to="/">
        Home
      </HeaderLink>
      <HeaderLink theme={theme} to="/movies">
        <SearchIcon />
        &nbsp;Movies
      </HeaderLink>
    </Navigation>
  );
}

Header.propTypes = {
  theme: PropTypes.object.isRequired,
};

export { Header };
