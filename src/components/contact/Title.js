import React from 'react';
import styled from 'styled-components';

const Title = () => {
  return (
    <Wrapper>
      <h3>Write us a letter</h3>
      <span>We appreciate you ideas</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  h3 {
    color: var(--main-black);
  }
  span {
    font-family: var(--secondary-font);
  }
  @media screen and (min-width: 800px) {
    margin-bottom: 4rem;
  }
`;

export default Title;
