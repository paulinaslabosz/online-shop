import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <form className='form'>
      <label className='form_header' htmlFor='textarea'>
        {' '}
        Skontaktuj się z nami
      </label>
      <textarea
        className='form_textarea'
        name='textarea'
        id='textarea'
        cols='30'
        rows='10'
      ></textarea>
      <input className='form_button' type='submit' value='Wyślij' />
    </form>
  );
}

export default Contact;
