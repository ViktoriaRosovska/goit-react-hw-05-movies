import styled from '@emotion/styled';

const { Container } = require('@mui/material');

const ContainerCast = styled(Container)`
  /* min-height: 1000px; */
`;

const CollapseTitle = styled.h2`
  font-size: 30px;
  color: ${props => props.theme.text};
  text-align: center;
  margin-bottom: 20px;
`;
const CloseButton = styled.button`
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
export {
  ContainerCast,
  CollapseTitle,
  CloseButton,
  CharacterTitle,
  CharacterName,
};
