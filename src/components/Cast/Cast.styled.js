import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const CollapseTitle = styled.h2`
  font-size: 30px;
  color: ${props => props.theme.text};
  text-align: center;
  margin-bottom: 20px;
`;
const CloseLink = styled(Link)`
  background-color: transparent;
  border: transparent;
  width: 24px;
  height: 24px;
  display: block;
  margin-left: auto;
  margin-right: 0;
  color: ${props => props.theme.accent};
  &:hover,
  :focus {
    color: ${props => props.theme.hover};
  }
`;
const CharacterTitle = styled.h2`
  margin-top: 20px;
  &.character {
    font-size: 20px;
    color: ${props => props.theme.accent};
    margin-bottom: 10px;
  }
`;

const CharacterName = styled.h3`
  font-size: 13px;
  color: ${props => props.theme.text};
  font-weight: 500;
`;
export { CollapseTitle, CloseLink, CharacterTitle, CharacterName };
