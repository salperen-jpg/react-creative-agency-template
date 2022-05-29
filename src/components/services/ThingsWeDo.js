import React from 'react';
import styled from 'styled-components';
import ImageContainer from '../about.js/ImageContainer';
import InfoContainer from '../about.js/InfoContainer';
import { text } from '../utils';

const ThingsWeDo = () => {
  return (
    <Wrapper>
      <ImageContainer
        source='https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/55290b76b9c6422c42122a30_desk2.jpeg'
        flexOrder={1}
      />
      <InfoContainer
        title='Things we do'
        type='We exist to create'
        text={text}
        buttonText='get in touch'
        flexOrder={2}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media screen and (min-width: 800px) {
    display: flex;
    gap: 2rem;
  }
`;

export default ThingsWeDo;
