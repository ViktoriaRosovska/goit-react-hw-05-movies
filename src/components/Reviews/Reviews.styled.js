import styled from '@emotion/styled';

const TextReviews = styled.p`
  color: ${props => props.theme.text};
`;

const AuthorRewiew = styled.h2`
  color: ${props => props.theme.accent};
`;

const DateReview = styled.p`
  color: ${props => props.theme.accent};
  text-align: end;
`;

const ItemReview = styled.li`
  border-bottom: 1px solid ${props => props.theme.accent};
  margin-bottom: 25px;
  &:last-child {
    border: none;
    padding-bottom: 20px;
  }
`;

const NoReview = styled.div`
  font-size: 20px;
  padding-bottom: 50px;
  color: ${props => props.theme.accent};
`;
export { TextReviews, AuthorRewiew, DateReview, ItemReview, NoReview };
