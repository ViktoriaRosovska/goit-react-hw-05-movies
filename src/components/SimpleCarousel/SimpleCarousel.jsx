import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { ImgWrapper, MovieWrapper, SliderMovie } from './SimpleCarousel.styled';

const SimpleCarousel = ({ trending }) => {
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
  };

  return (
    <SliderMovie {...settings}>
      {trending.map(({ title, id, poster_path, release_date }) => {
        return (
          <MovieWrapper key={id}>
            <Link to={`/movies/${id}`}>
              <ImgWrapper>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
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
export { SimpleCarousel };
