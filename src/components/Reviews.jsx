import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/API_themoviedb';
import { CloseButton, CollapseTitle } from './Cast.styled';
import CloseIcon from '@mui/icons-material/Close';

import {
  AuthorRewiew,
  DateReview,
  ItemReview,
  NoReview,
  TextReviews,
} from './Reviews.styled';
import { formatDate } from 'utilities/dateFormat';

const Reviews = ({ theme }) => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isReviews, setIsReviews] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const onComponentHide = () => {
    return navigate(`${location.state.from}`, { replace: true });
  };

  useEffect(() => {
    getMovieReviews(movieId).then(({ results }) => {
      results.length > 0 ? setIsReviews(true) : setIsReviews(false);
      setReviews(results);
    });
  }, [movieId]);

  return (
    <>
      <CloseButton onClick={onComponentHide} theme={theme}>
        <CloseIcon />
      </CloseButton>
      <CollapseTitle theme={theme}>Reviews </CollapseTitle>
      {!isReviews && (
        <NoReview theme={theme}>
          Sorry. There no any reviews for this movie
        </NoReview>
      )}
      <ul>
        {reviews &&
          reviews.map(({ content, id, author, url, updated_at }) => {
            return (
              <ItemReview key={id} theme={theme}>
                <AuthorRewiew theme={theme}>{author}</AuthorRewiew>
                <TextReviews theme={theme}>{content}</TextReviews>
                <DateReview theme={theme}>{formatDate(updated_at)}</DateReview>
              </ItemReview>
            );
          })}
      </ul>
    </>
  );
};

Reviews.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default Reviews;
