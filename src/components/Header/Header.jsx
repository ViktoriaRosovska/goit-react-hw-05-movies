import foxlogo from 'img/fox.png';
import { HeaderLink, Logo, LogoText, Navigation } from './Header.styled';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <Navigation>
      <Logo>
        <img src={foxlogo} alt="logo fox" />
        <LogoText>FoxyMovies</LogoText>
      </Logo>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/movies">
        <SearchIcon />
        &nbsp;Movies
      </HeaderLink>
    </Navigation>
  );
}

export { Header };
