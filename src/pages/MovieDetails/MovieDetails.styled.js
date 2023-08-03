import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const DetailsWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  gap: 30px;
  padding-bottom: 50px;
  color: ${props => props.theme.text};
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const GoBackLink = styled(NavLink)`
  margin-top: 20px;
  font-size: 20px;
  display: inline-flex;
  gap: 10px;
  align-content: center;
  color: ${props => props.theme.accent};
  &:hover,
  :focus {
    color: ${props => props.theme.hover};
  }
`;
const AboutLinks = styled.div`
  display: flex;
  gap: 30px;
  &.active {
    background-color: ${props => props.theme.accent};
    border-radius: 15px;
    color: white;
  }
`;

const About = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: ${props => props.theme.accent};
  &:active,
  &:hover,
  &:focus {
    color: white;
    background-color: ${props => props.theme.accent};
    border-radius: 5px;
  }
`;

const DetailsInfo = styled.div`
  max-width: 100%;
  & .homepage {
    color: ${props => props.theme.accent};
  }
  & .homepage:hover {
    color: ${props => props.theme.hover};
  }
`;
export { DetailsWrapper, GoBackLink, About, AboutLinks, DetailsInfo };
