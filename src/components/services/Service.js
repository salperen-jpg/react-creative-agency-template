import React from 'react';
import styled from 'styled-components';

const Service = ({ id, img, title, exp }) => {
  return (
    <Wrapper key={id} className='service'>
      <img src={img} alt={title} className='img' />
      <h3>{title}</h3>
      <p>{exp}</p>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--boxes);
  margin-bottom: 1rem;
  img {
    width: 8rem;
    object-fit: cover;
  }
  h3 {
    color: var(--main-black);
    text-align: center;
  }
  p {
    text-align: center;
    line-height: 1.5;
    font-size: 0.6rem;
  }
  @media screen and (min-width: 700px) {
    padding: 3rem;
    min-height: 400px;
  }
  @media screen and (min-width: 900px) {
    p {
      font-size: 0.8rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
`;

export default Service;
