import React from 'react';
import data from './data';
import styled from 'styled-components';

const Meters = () => {
  return (
    <section className='section'>
      <Wrapper className='meters'>
        {data.map((single) => {
          const { id, value, title } = single;
          return (
            <article key={id}>
              <h2>{value}</h2>
              <h5>{title}</h5>
            </article>
          );
        })}
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  h2 {
    color: var(--main-black);
  }
  h5 {
    font-family: var(--secondary-font);

    letter-spacing: 0.1rem;
  }
  @media screen and (min-width: 800px) {
    max-width: 70rem;
    margin: 0 auto;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default Meters;
