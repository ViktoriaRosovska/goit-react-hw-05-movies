import foxlogo from 'img/fox.png';
import { MainContainer } from 'components/App/App.styled';
import { ContainerHeader, HeaderLink, Logo, Navigation } from './Header.styled';
import SearchIcon from '@mui/icons-material/Search';
const { Outlet } = require('react-router-dom');

const Header = () => {
  return (
    <>
      <MainContainer>
        <ContainerHeader>
          <Navigation>
            <Logo>
              <img src={foxlogo} alt="logo fox" />
              <span>FoxyMovies</span>
            </Logo>

            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/movies">
              <SearchIcon />
              &nbsp;Movies
            </HeaderLink>
          </Navigation>
        </ContainerHeader>
      </MainContainer>
      <Outlet />
    </>
  );
};

export { Header };
