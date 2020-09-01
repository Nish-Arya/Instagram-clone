import React from 'react'
import { Redirect } from 'react-router-dom';
import { logout } from '../store/auth';
import { useDispatch, useSelector } from 'react-redux';

function HomePage() {

  const isLoggedIn = useSelector(state => !!state.auth.id);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  }

  if (!isLoggedIn) return <Redirect to='/login' />;

  return (
    <div>
      <button onClick={handleClick} type='submit'>Log Out</button>
    </div>
  )
}

export default HomePage;
