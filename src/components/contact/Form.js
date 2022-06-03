import React from 'react';
import styled from 'styled-components';

const Form = () => {
  const [formInputs, setFormInputs] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [buttonText, setButtonText] = React.useState('Submit');
  const handleChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formInputs.name || !formInputs.email || !formInputs.message) {
    } else {
      setButtonText('Please wait...');
      setTimeout(() => {
        setIsLoading(true);
      }, 1000);
    }
  };
  return (
    <Wrapper>
      {isLoading ? (
        <div className='after-form'>
          {' '}
          Thank you! Your submission has been received!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='form-action'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              value={formInputs.name}
              required
              onChange={handleChange}
            />
          </div>
          <div className='form-action'>
            <label htmlFor='email'>email address</label>
            <input
              type='text'
              name='email'
              value={formInputs.email}
              required
              onChange={handleChange}
            />
          </div>
          <div className='form-action'>
            <label htmlFor='message'>Message</label>
            <textarea
              name='message'
              value={formInputs.message}
              required
              onChange={handleChange}
            ></textarea>
          </div>
          <button type='submit' className='btn submit-btn'>
            {buttonText}
          </button>
        </form>
      )}
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
  .after-form {
    padding: 1rem;
    width: min(100%, 50rem);
    text-align: center;
    background: #ddd;
    color: var(--main-black);
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
`;

export default Form;
