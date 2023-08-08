import PropTypes from 'prop-types';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { ImgWrapper, MovieWrapper, SliderMovie } from './SimpleCarousel.styled';
import imgNotFound from '../../img/imgnotfound.jpg';

const SimpleCarousel = ({ trending, theme }) => {
  const settings = {
    centerMode: true,
    centerPadding: '0px',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <SliderMovie {...settings} theme={theme}>
      {trending.map(({ title, id, poster_path, release_date }) => {
        return (
          <MovieWrapper key={id} theme={theme}>
            <Link to={`/movies/${id}`}>
              <ImgWrapper theme={theme}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                      : imgNotFound
                  }
                  alt={title}
                />

                <h2>{title}</h2>
                <p>Release date: {release_date}</p>
              </ImgWrapper>
            </Link>
          </MovieWrapper>
        );
      })}
    </SliderMovie>
  );
};

SimpleCarousel.propTypes = {
  trending: PropTypes.arrayOf(PropTypes.object).isRequired,
  theme: PropTypes.object.isRequired,
};

export { SimpleCarousel };
