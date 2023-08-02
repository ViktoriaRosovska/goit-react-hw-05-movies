import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const ContainerHeader = styled.header`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 1400) {
    width: 1400px;
  }
`;

const Navigation = styled.nav`
  border-bottom: 2px solid #142253;
  display: flex;
  justify-content: flex-end;
  font-size: 30px;
  font-weight: 500;
  color: #142253;
  align-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  gap: 50px;
  position: relative;
`;

const HeaderLink = styled(NavLink)`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 13px;
  padding-right: 13px;
  color: #142253;
  &.active {
    background-color: #142253;
    border-radius: 15px;
    color: white;
  }
  &:active,
  &:hover,
  &:focus {
    color: white;
    background-color: #142253;
    border-radius: 15px;
  }
`;

const Logo = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 50px;
  font-family: 'Lucida Sans';
  font-weight: 600;
  gap: 20px;
  position: absolute;
  left: 0;
  top: 10px;
  & img {
    width: 80px;
  }
`;

export { Navigation, ContainerHeader, HeaderLink, Logo };
