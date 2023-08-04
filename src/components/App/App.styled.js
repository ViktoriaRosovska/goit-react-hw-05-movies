import styled from '@emotion/styled';
import { globalTheme } from 'styles/theme';

const MainContainer = styled.section`
  margin: 0 auto;
`;

const MainContainerApp = styled(MainContainer)`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: ${props => props.theme.accent};
`;

const Container = styled.div`
  max-width: 1400px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  background-color: ${props => props.theme.body};
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 1400) {
    width: 1400px;
  }
  @media screen and (min-width: 320px) {
    // Не виходить передавати пропсами тему
    min-width: ${props => globalTheme.breakpoints.xs};
  }
  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

export { MainContainer, Container, MainContainerApp };
