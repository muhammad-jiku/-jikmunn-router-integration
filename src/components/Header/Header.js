import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../CustomHooks/useFirebase/useFirebase';
import './Header.css';

function Header() {
  const { user, signingOut } = useFirebase();
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/reviews">Reviews</Link>

      {user?.uid ? (
        <>
          <button onClick={signingOut}>Sign Out</button>
          &nbsp;&nbsp;&nbsp;
          <span>{user?.displayName}</span>
        </>
      ) : (
        <>
          <Link to="/registration">Registration</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
}

export default Header;
