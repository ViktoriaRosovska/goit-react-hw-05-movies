import styled from '@emotion/styled';

const ImageWrapper = styled.div`
  width: ${props => props.style.width};
  height: ${props => props.style.height};
  & img {
    width: ${props => props.style.width};
    height: ${props => props.style.height};
  }
`;
export { ImageWrapper };
