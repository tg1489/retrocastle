import React from 'react';
import email from '../assets/email.png';
import { Form } from '../components/Form';
import '../Requests.css';

export default function Requests() {
  return (
    <div className='container'>
      <h2 className='requests-title'>Have a request?</h2>
      <p className='requests-text'>
        If the existing options do not align with your preferences, I invite you
        to explore the possibility of a custom design tailored exclusively to
        your vision. Your input is of utmost importance, and I am open to
        crafting a design that resonates with your individual style. Feel free
        to communicate your preferences, ideas, or even provide reference
        images, and I will diligently bring your artistic aspirations to life.
        Your satisfaction is my priority, and I am committed to delivering a
        personalized piece that exceeds your expectations.
      </p>
      <img src={email} alt='email logo' className='contact-image' />
      <h5 className='requests-email'>retrocastlenj@gmail.com</h5>
      <br />
      <div className='container'>
        <Form />
      </div>
    </div>
  );
}
