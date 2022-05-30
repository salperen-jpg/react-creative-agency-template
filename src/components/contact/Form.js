import React from 'react';
import styled from 'styled-components';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div className='form-action'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' />
        </div>
        <div className='form-action'>
          <label htmlFor='email'>email address</label>
          <input type='text' name='email' />
        </div>
        <div className='form-action'>
          <label htmlFor='message'>email address</label>
          <textarea name='message'></textarea>
        </div>
        <button type='submit' className='btn submit-btn'>
          submit
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: min(100%, 50rem);
  margin-inline: auto;
  .form-action {
    margin-bottom: 1rem;
  }
  label {
    display: block;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 0.2rem;
  }
  input,
  textarea {
    display: block;
    width: 100%;
    height: 38px;
    outline: none;
    padding: 8px 12px;
    border: 1px solid #ccc;
    color: #555;

    margin: 0 auto;
  }
  .submit-btn {
    display: block;
    margin: 0 auto;
    margin-top: 2rem;
    text-transform: capitalize;
  }
  input:focus,
  textarea:focus {
    border-color: #5584ca;
  }
  textarea {
    height: 5rem;
  }
`;

export default Form;
