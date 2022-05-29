import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { footerData } from '../utils';
const Footer = () => {
  return (
    <Wrapper className='section'>
      <img src={logo} alt='' className='logo' />
      {footerData.map((sec) => {
        const { id, spec, others } = sec;
        return (
          <article key={id} className='single-col'>
            <span className='spec'>{spec}</span>
            {others.map((link, index) => {
              return <span key={index}>{link}</span>;
            })}
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 3rem 0;
  background-color: #242424;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--main-white);
  .logo {
    width: 5rem;
    margin-bottom: 2rem;
  }
  .single-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .spec {
    color: var(--primary-color);
    font-size: 1rem;
    text-transform: uppercase;
  }
  @media screen and (min-width: 800px) {
    padding: 3rem;
    flex-direction: row;
    align-items: flex-start;
    gap: 5rem;
    .logo {
      margin: 0;
    }
    .single-col {
      align-items: flex-start;
      justify-content: flex-start;
      margin-bottom: 0;
    }
  }
`;
export default Footer;
