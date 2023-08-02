const { styled } = require('styled-components');

const GridList = styled.ul`
  margin-top: 50px;
  display: grid;
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
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  & h2 {
    font-size: 15px;
    color: #142253;
    text-align: center;
  }
  & h2:hover {
    color: orange;
  }
`;
const PageTitle = styled.h1`
  text-align: right;
  padding-top: 40px;
  padding-bottom: 20px;
  color: #142253;
`;
export { GridList, PageTitle };
