import styled from '@emotion/styled';
import { darkTheme } from 'styles/theme';

const MovieSearch = styled.input`
  display: inline-block;
  width: 100%;
  height: 40px;
  border-radius: 15px;
  border: 2px solid ${props => props.theme.accent};
  padding-left: 20px;
  padding-right: 60px;
  font-size: 20px;
  font-weight: bold;
`;
const SearchWrapper = styled.div`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  gap: 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SearchBtn = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  & svg {
    fill: ${props =>
      props.theme !== darkTheme ? props.theme.accent : 'black'};
    width: 30px;
    height: 30px;
  }
  & :hover {
    fill: orange;
  }
`;
export { MovieSearch, SearchWrapper, SearchBtn };
