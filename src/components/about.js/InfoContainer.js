import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const InfoContainer = ({ title, type, text, buttonText, flexOrder }) => {
  return (
    <Wrapper style={{ order: `${flexOrder}` }}>
      <Title title={title} />
      <span>{type}</span>
      <p>{text}</p>
      <button className='btn'>{buttonText}</button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: var(--boxes);
  margin-bottom: 1rem;

  h3 {
    color: var(--main-black);
    text-align: center;
  }
  span {
    display: inline-block;
    margin-bottom: 1rem;
    font-weight: 600;
    font-family: var(--secondary-font);
  }
  p {
    text-align: center;
    max-width: 30rem;
    margin: 0 auto;
    line-height: 1.5;
    color: var(--primary-color);
  }
  @media screen and (min-width: 800px) {
    min-height: 400px;
    flex: 1 1 calc(50% - 2rem);
  }
  @media screen and (min-width: 1200px) {
    min-height: 600px;
  }
`;

export default InfoContainer;
