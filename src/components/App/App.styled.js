import styled from '@emotion/styled';

const MainContainer = styled.section`
  margin: 0 auto;
`;

const MainContainerApp = styled(MainContainer)`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #142253;
`;

const Container = styled.div`
  max-width: 1400px;
  /* min-height: 100vh; */
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 1400) {
    width: 1400px;
  }
`;

export { MainContainer, Container, MainContainerApp };
