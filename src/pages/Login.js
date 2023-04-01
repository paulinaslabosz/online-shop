import React from 'react';

function Login() {
  return (
    <>
      <form>
        <label htmlFor='login'>
          Type your login:
          <input type='text' name='text' id='text' />
        </label>
        <label htmlFor='password'>
          Type your password:
          <input type='password' name='password' id='password' />
        </label>
      </form>
    </>
  );
}

export default Login;
