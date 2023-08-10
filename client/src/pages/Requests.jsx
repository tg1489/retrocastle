import React from 'react';
import email from '../assets/email.png';
import call from '../assets/call.png';
import { Form } from '../components/Form';

export default function Requests() {
  return (
    <div>
      <h2 className='contact-title'>Let's get in touch</h2>
      <img src={email} alt='email logo' className='contact-image' />
      <h5 className='contact-body'>tonyguarino1489@gmail.com</h5>
      <br />
      <img src={call} alt='phone logo' className='contact-image' />
      <h5 className='contact-body'>732-850-6458</h5>
      <div className='container'>
        <Form />
      </div>
    </div>
  );
}
