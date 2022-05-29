import React from 'react';
import styled from 'styled-components';

const ImageContainer = ({ source, flexOrder }) => {
  return (
    <Wrapper
      style={{ backgroundImage: `url(${source})`, order: `${flexOrder}` }}
    ></Wrapper>
  );
};

const Wrapper = styled.article`
  height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 1rem;
  @media screen and (min-width: 800px) {
    flex: 1 1 calc(50% - 2rem);
    min-height: 450px;
    width: 400px;
  }
  @media screen and (min-width: 1200px) {
    min-height: 600px;
  }
`;

export default ImageContainer;
