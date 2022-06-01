import React from 'react';
import styled from 'styled-components';
import data from './data';

const Gallery = () => {
  return (
    <Wrapper className='section'>
      {data.map((single) => {
        const { id, title, small, text, writable, image } = single;
        if (writable) {
          return (
            <article key={id}>
              <h3>{title}</h3>
              <span>{small}</span>
              <p>{text}</p>
            </article>
          );
        }
        return (
          <article key={id}>
            <img src={image} className='gallery-image' alt='photo' />
            <div className='overlay'>
              <span>Porfolio title</span>
              <span>Branding,Web Design</span>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 1rem;
  article {
    position: relative;
  }
  article::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    border: 1px solid var(--main-white);
    z-index: 2;
    transform: scale(0.9);
    transition: all 0.3s linear;
  }

  article:nth-of-type(1)::after {
    background-color: #fff;
    z-index: -1;
  }

  .gallery-image {
    height: 10rem;
    object-fit: cover;
  }

  h3 {
    color: var(--main-black);
    letter-spacing: -1px;
    max-width: 5rem;
  }
  span {
    font-family: var(--secondary-font);
  }
  p {
    display: none;
  }
  @media screen and (min-width: 470px) and (max-width: 768px) {
    .gallery-image {
      min-height: 20rem;
      object-fit: cover;
    }
  }
  /* CONTINUE FROM EDLETING BORDER AND OVERLAY */
  @media screen and (min-width: 500px) {
    .gallery-image {
      min-height: 20rem;
      object-fit: cover;
    }
  }

  /* FOUR COLUMN LAYOUT */
  @media screen and (min-width: 800px) {
    & {
      grid-template-columns: repeat(4, 1fr);

      p {
        display: block;
        margin-top: 2rem;
        font-size: smaller;
        line-height: 1.5;
      }
      article::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.1);
      }
      article:hover::after {
        background-color: rgba(0, 0, 0, 0.5);
      }
      article:nth-child(1):hover::after {
        background-color: var(--main-white);
      }
    }
  }

  /* OVERLAY HOVER EFFECT */
  @media screen and (min-width: 1000px) {
    .overlay {
      opacity: 0;
    }
    article:hover .overlay {
      opacity: 1;
    }
  }

  @media screen and (min-width: 800px) and (max-width: 1170px) {
    .gallery-image {
      min-height: 15rem;
      object-fit: cover;
    }
  }
  @media screen and (min-width: 1170px) {
    .gallery-image {
      min-height: 27rem;
    }
  }
`;
export default Gallery;
