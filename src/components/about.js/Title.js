import React from 'react';

const Title = ({ title }) => {
  const titleWords = title.split('&');
  console.log(titleWords);
  return (
    <h3>
      {titleWords[0]}
      <br />
      {titleWords.length > 1 && '&'}
      {titleWords[1]}
    </h3>
  );
};

export default Title;
