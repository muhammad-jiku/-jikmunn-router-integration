import React from 'react';
import useFirebase from '../CustomHooks/useFirebase/useFirebase';

function Login() {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <h1>This is login page</h1>
      <form>
        <input type="email" name="" id="" placeholder="Email" />
        <br />
        <input type="password" name="" id="" placeholder="Password" />
        <br />
        <button>Log in</button>
      </form>
      <button onClick={signInWithGoogle}> Log in with Google</button>
    </div>
  );
}

export default Login;
