import React, { useState } from 'react';
import data from './data';
import styled from 'styled-components';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Navbar from '../Navbar';

const Hero = () => {
  const [heroData, setHeroData] = useState(data);
  const [index, setIndex] = useState(0);
  const { img, title, exp } = heroData[index];

  const checkIndex = (num) => {
    if (num < 0) {
      return heroData.length - 1;
    }
    if (num > heroData.length - 1) {
      return 0;
    }
    return num;
  };

  const prev = () => {
    setIndex((oldIndex) => {
      return checkIndex(oldIndex - 1);
    });
  };

  const next = () => {
    setIndex((oldIndex) => {
      return checkIndex(oldIndex + 1);
    });
  };

  return (
    <Wrapper
      className='hero'
      id='home'
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className='hero-banner'>
        <h2>{title}</h2>
        <span>{exp}</span>
      </div>
      <button className='my-btn left' onClick={prev}>
        <AiOutlineLeft />
      </button>
      <button className='my-btn right' onClick={next}>
        <AiOutlineRight />
      </button>
      <Navbar />
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.section`
  height: calc(100vh - 2rem);
  margin-bottom: 1rem;
  background-position: 20% 30%;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  transition: var(--transition);

  .hero-banner {
    position: absolute;
    right: 1rem;
    top: 10rem;
    text-align: right;
    color: var(--main-white);
    h2 {
      max-width: 15rem;
    }
    span {
      display: block;
      max-width: 15rem;
      text-align: right;
    }
    span {
      font-family: var(--secondary-font);
    }
  }
  .my-btn {
    font-size: 2rem;
    cursor: pointer;
    background-color: transparent;
    border: transparent;
    color: var(--main-white);
    display: inline-block;
    position: absolute;
    padding: 0.5rem 0.25rem 0.05rem 0.1rem;
    transition: var(--transition);
    display: none;
  }
  .my-btn:hover {
    background-color: var(--primary-color);
  }
  .left {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  .right {
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
  @media screen and (min-width: 568px) {
    .hero-banner {
      right: 5rem;
      top: 12rem;
    }
    h2 {
      min-width: 28rem;
    }
    span {
      min-width: 28rem;
    }
  }
  @media screen and (min-width: 800px) {
    .hero-banner {
      right: 8rem;
      top: 15rem;
    }
    h2 {
      min-width: 28rem;
    }
    span {
      min-width: 28rem;
    }
    .my-btn {
      display: block;
    }
  }
  @media screen and (min-width: 1200px) {
    .hero-banner {
      right: 15rem;
      top: 17rem;
    }
    h2 {
      min-width: 28rem;
    }
    span {
      min-width: 28rem;
    }
  }
`;
