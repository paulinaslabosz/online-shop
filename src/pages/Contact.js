import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    content: '',
    mail: '',
    active: false,
  });

  const handleSubmit = (e) => {
    if (formData.content !== '' && formData.mail !== '') {
      e.preventDefault();
      setFormData({
        ...formData,
        content: '',
        mail: '',
        active: !formData.active,
      });
    } else {
      alert('Błąd: pusty formularz');
    }
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <label className='form_header' htmlFor='textarea'>
          {' '}
          Skontaktuj się z nami:
        </label>
        <textarea
          className='form_textarea'
          name='textarea'
          id='textarea'
          cols='30'
          rows='10'
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
        ></textarea>
        <label htmlFor='mail'>Podaj swój adres e-mail:</label>
        <input
          className='form_mail'
          placeholder='name@example.com'
          type='email'
          name='mail'
          id='mail'
          value={formData.mail}
          onChange={(e) => setFormData({ ...formData, mail: e.target.value })}
        />
        <input className='form_button' type='submit' value='Wyślij' />
        {formData.active ? (
          <p className='form_comment'>Formularz został przesłany. Dziękujemy</p>
        ) : null}
      </form>
    </>
  );
}

export default Contact;
