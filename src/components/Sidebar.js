import React from 'react';
import { useGlobalContext } from '../context/context';
import logo from '../assets/secondary.png';
import { links } from './utils';
import styled from 'styled-components';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <Wrapper
      className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
    >
      <div className='sidebar-container'>
        <img src={logo} alt='logo' className='logo' />
        <ul className='sidebar-links'>
          {links.map((link) => {
            const { id, path, text } = link;
            return (
              <li key={id}>
                <a href={`#${path}`} onClick={closeSidebar}>
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--main-white);
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  transform: translateX(100%);
  transition: all 0.3s linear;
  .logo {
    width: 6rem;
  }
  .sidebar-links {
    text-align: center;
  }
  li {
    display: block;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: var(--transition);
    color: var(--main-black);
  }
  li:hover {
    color: var(--primary-color);
  }
  &.show-sidebar {
    transform: translate(0);
  }
`;

export default Sidebar;
