import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import data from './data';
const Quotes = () => {
  const [quotes, setQuotes] = useState(data);
  const [index, setIndex] = useState(0);

  const checkIndex = (ind) => {
    let index = ind + 1;
    if (index > quotes.length - 1) {
      index = 0;
    }
    return index;
  };

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(checkIndex(index));
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <Wrapper className='section'>
      <div className='title'>
        <h3>Our Clients</h3>
        <h3 className='ital'>love our work</h3>
        <span>But don’t just take our word for it...</span>
      </div>
      <article className='quote-center'>
        {quotes.map((qu, quoteIndex) => {
          const { id, quote, author } = qu;

          let position = 'nextSlide';
          if (index === quoteIndex) {
            position = 'activeSlide';
          }
          if (
            quoteIndex === index - 1 ||
            (index === 0 && quoteIndex === quotes.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <aside className={position} key={id}>
              <span className='quote-text'>{quote}</span>
              <span className='author'>{author}</span>
            </aside>
          );
        })}
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .title {
    text-align: center;
    margin-bottom: 4rem;
    h3 {
      color: var(--main-black);
    }
    span {
      font-family: var(--secondary-font);
      color: var;
    }
  }
  .quote-center {
    position: relative;
    min-height: 100px;
    display: flex;
    text-align: center;
    overflow: hidden;
  }
  aside {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    /* transition: all 1s linear; */
  }
  aside.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  aside.lastSlide {
    transform: translateX(-100%);
  }
  aside.nextSlide {
    transform: translateX(100%);
  }
  aside span {
    font-family: var(--secondary-font);
    display: block;
    font-size: 1rem;
    font-weight: 600;
    max-width: 35rem;
    margin: 0 auto;
  }
  .quote-text {
    margin-bottom: 1rem;
  }
`;

export default Quotes;
