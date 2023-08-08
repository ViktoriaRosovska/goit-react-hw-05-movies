import styled from '@emotion/styled';
import Slider from 'react-slick';
import { globalTheme, lightTheme } from 'styles/theme';

const SliderMovie = styled(Slider)`
  width: 885px;
  margin-left: auto;
  margin-right: auto;
  max-height: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 80px;

  & .slick-prev::before,
  .slick-next::before {
    color: ${props => props.theme.accent};
    opacity: 1;
  }

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 600px;
    height: auto;
  }
  @media screen and (min-width: 600px) and (max-width: 768px) {
    width: 500px;
    height: auto;
  }
  @media screen and (min-width: 320px) and (max-width: 600px) {
    max-width: 200px;
  }

  & .slick-track {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }

  & .slick-slide {
    transition: width 400ms ease-out;
    @media screen and (min-width: 768px) and (max-width: 1200px) {
      width: 160px;
    }
  }
  & .slick-current img {
    width: 260px;

    @media screen and (max-width: 1200px) {
      width: 200px;
    }
    @media screen and (max-width: 1200px) {
      width: 200px;
    }
  }
  & .slick-dots li.slick-active button::before {
    color: ${props => props.theme.accent}!important;
    opacity: 1;
  }
  & .slick-dots li button:before {
    color: ${props => props.theme.accent}!important;
  }
`;

const MovieWrapper = styled.div`
  width: 260px;
  display: block;
  padding-top: 20px;
  & p {
    font-size: 10px;
    color: rgb(138, 135, 135);

    display: flex;
    justify-content: center;
    padding: 0;
    margin-left: 10px;
    line-height: 1;
  }
  & img {
    border-radius: 20px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
  }
  & a {
    margin: 0;
    padding: 0;
    text-decoration: none;
    width: 200px;
    margin: 0;
    margin-right: 0;
  }
  & h2 {
    width: 200px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    margin-bottom: 4px;
    font-size: 12px;
    line-height: 1.5;
    font-weight: bold;
    color: rgb(45, 44, 44);
    margin-top: 8px;
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    color: ${props => props.theme.accent};
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & img:hover {
    box-shadow: ${props =>
      props.theme === lightTheme
        ? globalTheme.boxShadow.lt
        : globalTheme.boxShadow.dt};
    scale: 1.02;
  }
`;

export { SliderMovie, MovieWrapper, ImgWrapper };
