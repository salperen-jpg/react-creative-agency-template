import React from 'react';
import styled from 'styled-components';
import InfoContainer from './InfoContainer';
import { text } from '../utils';
import ImageContainer from './ImageContainer';

const About = () => {
  return (
    <Wrapper id='about'>
      <InfoContainer
        title='Creative 
        &Fresh'
        type='Our digital agency'
        text={text}
        buttonText='view portfolio'
        flexOrder={2}
      />
      <InfoContainer
        title='Hip
&Funky'
        type='We try new things'
        text={text}
        buttonText='our services'
        flexOrder={3}
      />
      <ImageContainer
        source='https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/55290b3f3869f6db4ed16c57_desk1.jpeg'
        flexOrder={1}
      />
      <ImageContainer
        source='https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/55290b56b9c6422c42122a2b_desk3.jpeg'
        flexOrder={4}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media screen and (min-width: 800px) {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }
`;

export default About;
