import React from 'react';
import data from './data';
import Service from './Service';
import styled from 'styled-components';
import ThingsWeDo from './ThingsWeDo';

const Services = () => {
  return (
    <Wrapper className='services'>
      <ThingsWeDo />
      <div className='service-types'>
        {data.map((single) => {
          return <Service key={single.id} {...single} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .service-types {
    display: grid;
  }

  @media screen and (min-width: 768px) {
    .service-types {
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }
  }
`;

export default Services;
