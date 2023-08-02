import Slider from 'react-slick';

const { styled } = require('styled-components');

const SliderMovie = styled(Slider)`
  width: 885px;
  margin-left: auto;
  margin-right: auto;
  height: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 80px;
  & button::before {
    color: #142253;
    opacity: 1;
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
  }
  & .slick-current img {
    width: 260px;
    height: fit-content;
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
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & img:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    scale: 1.02;
  }
`;
export { SliderMovie, MovieWrapper, ImgWrapper };
