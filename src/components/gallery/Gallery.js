import React from 'react';
import styled from 'styled-components';
import data from './data';

const Gallery = () => {
  return (
    <section className='section'>
      {data.map((single) => {
        const { id, title, small, text, writable, image } = single;
        if (writable) {
          return (
            <article key={id}>
              <h4>{title}</h4>
              <span>{small}</span>
              <p>{text}</p>
            </article>
          );
        }
        return (
          <article key={id}>
            <img src={image} alt='photo' />
          </article>
        );
      })}
    </section>
  );
};

const Wrapper = styled.section``;
export default Gallery;
