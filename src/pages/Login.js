import React from 'react';

function Login() {
  return (
    <>
      <form>
        <label htmlFor='login'>
          Podaj login:
          <input type='text' name='text' id='text' />
        </label>
        <label htmlFor='password'>
          Podaj hasło:
          <input type='password' name='password' id='password' />
        </label>
      </form>
    </>
  );
}

export default Login;
