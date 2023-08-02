import { Container } from 'components/App/App.styled';
import { styled } from 'styled-components';
const ContainerMovie = styled(Container)`
  min-height: 100vh;
`;

const MovieSearch = styled.input`
  display: inline-block;
  width: 500px;
  height: 40px;
  border-radius: 15px;
  border: 2px solid #142253;
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
  & .inputSearch {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    & svg {
      fill: #142253;
      width: 30px;
      height: 30px;
    }
  }
`;
export { MovieSearch, SearchWrapper, ContainerMovie };
