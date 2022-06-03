import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { links } from './utils';
import { useGlobalContext } from '../context/context';
const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <Wrapper>
      <div className='nav-center'>
        <img src={logo} alt='logo' className='nav-logo' />
        <button className='btn nav-toggle' onClick={openSidebar}>
          <GiHamburgerMenu />
        </button>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, path, text } = link;
            return (
              <li key={id}>
                <a href={`#${path}`}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-toggle {
    padding: 0.375rem 0.775rem;
    font-size: 1.2rem;
    border: transparent;
    color: var(--main-white);
  }
  .nav-toggle:hover {
    background-color: transparent;
    color: var(--main-white);
  }
  .nav-logo {
    width: 3rem;
  }
  .nav-links {
    display: none;
  }
  @media screen and (min-width: 1000px) {
    height: 5rem;
    display: flex;
    align-items: center;
    padding-left: 3rem;
    .nav-center {
      gap: 5rem;
    }
    .nav-logo {
      width: 4rem;
    }
    .nav-toggle {
      display: none;
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 3rem;
      flex: 1;
      a {
        color: var(--main-white);
        text-transform: uppercase;
      }
    }
  }
`;

export default Navbar;
