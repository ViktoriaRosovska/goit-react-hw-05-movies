import { Select } from '@mui/material';

import styled from '@emotion/styled';
import { lightTheme, globalTheme } from 'styles/theme';

const GridList = styled.ul`
  margin-top: 50px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  & li {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  & img {
    width: 260px;
    height: 390px;
    object-fit: fill;
    margin: 0;
    padding: 0;
    display: block;
    margin-bottom: 20px;
  }
  & img:hover {
    scale: 1.02;
    box-shadow: ${props =>
      props.theme === lightTheme
        ? globalTheme.boxShadow.lt
        : globalTheme.boxShadow.dt};
  }
  & h2 {
    font-size: 15px;
    color: ${props => props.theme.accent};
    text-align: center;
  }
  & h2:hover {
    color: ${props => props.theme.hover};
  }
`;
const PageTitle = styled.h1`
  text-align: right;
  padding-top: 40px;
  padding-bottom: 20px;
  color: ${props => props.theme.accent};
`;

const CustomSelect = styled(Select)`
  height: 30px;
  width: 90px;
  margin-left: calc(100% - 90px);
  margin-top: 20px;
  background-color: ${props => props.theme.accent};
  color: ${props => props.theme.body};
  & svg {
    color: ${props => props.theme.body};
  }
`;
export { GridList, PageTitle, CustomSelect };
