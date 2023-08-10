import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export const Form = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameWarningVisible, setNameWarningVisible] = useState(false);
  const [emailWarningVisible, setEmailWarningVisible] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameWarningVisible(false); // Hide the name warning when the name input changes
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailWarningVisible(false); // Hide the email warning when the email input changes
  };

  const handleNameBlur = () => {
    if (name.trim() === '') {
      setNameWarningVisible(true); // Show the name warning if the name field is empty on blur
    }
  };

  const handleEmailBlur = () => {
    if (email.trim() === '' || !validateEmail(email)) {
      setEmailWarningVisible(true); // Show the email warning if the email field is empty or does not contain a valid email on blur
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '') {
      setNameWarningVisible(true); // Show the name warning if the name field is empty on form submit
    }

    if (email.trim() === '' || !validateEmail(email)) {
      setEmailWarningVisible(true); // Show the email warning if the email field is empty or does not contain a valid email on form submit
    }

    if (name.trim() && email.trim() && validateEmail(email)) {
      // If both name and email have valid values, send the email using emailjs
      emailjs
        .sendForm(
          'service_2z4jx6e',
          'template_15uk8m8',
          form.current,
          'fCylMlt-CBloxqKbq'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <form className='form-contact' ref={form} onSubmit={handleFormSubmit}>
      <p className='form-contact-text'>Your Name</p>
      <input
        required
        type='text'
        name='user_name'
        value={name}
        onChange={handleNameChange}
        onBlur={handleNameBlur}
      />
      {nameWarningVisible && (
        <span className='warning'>⚠️ Name is required</span>
      )}
      <p className='form-contact-text'>Your Email</p>
      <input
        required
        type='email'
        name='user_email'
        value={email}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
      />
      {emailWarningVisible && (
        <span className='warning'>⚠️ Please enter a valid email</span>
      )}
      <p className='form-contact-text'>Message</p>
      <textarea name='message' />
      <input
        required
        className='form-contact-button'
        type='submit'
        value='Send'
      />
    </form>
  );
};
