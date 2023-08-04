import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const ContainerHeader = styled.header`
  margin-left: auto;
  margin-right: auto;
  background-color: ${props => props.theme.body};
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 1400px) {
    width: 1400px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  @media (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 320px) {
    min-width: 320px;
  }
`;

const Navigation = styled.nav`
  border-bottom: 2px solid ${props => props.theme.accent};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 500;
  color: ${props => props.theme.accent};
  align-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  gap: 50px;
  position: relative;
  @media screen and (min-width: 320px) and (max-width: 600px) {
    gap: 20px;
  }
`;

const HeaderLink = styled(NavLink)`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 13px;
  padding-right: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  color: ${props => props.theme.accent};
  &:active,
  &:hover,
  &:focus {
    color: white;
    background-color: ${props => props.theme.accent};
    border-radius: 15px;
  }
  @media screen and (min-width: 320px) and (max-width: 600px) {
    font-size: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 7px;
    padding-right: 7px;
  }
  & svg {
    @media screen and (min-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }
`;

const Logo = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-right: auto;
  & img {
    width: 80px;
  }
`;

const LogoText = styled.span`
  font-family: 'Lucida Sans';
  font-weight: 600;
  font-size: 50px;
  @media screen and (min-width: 768px) and (max-width: 1199.89px) {
    font-size: 30px;
  }

  @media screen and (max-width: 767.98px) {
    display: none;
  }
`;
export { Navigation, ContainerHeader, HeaderLink, Logo, LogoText };
