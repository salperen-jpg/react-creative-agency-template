import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import Title from './Title';

const Contact = () => {
  return (
    <Wrapper className='section' id='contact'>
      <Title />
      <Form />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Contact;
