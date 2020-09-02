import React from 'react'
import { Redirect } from 'react-router-dom';
import { logout } from '../store/auth';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../images/petgram-logo.png';
import './HomePage.css';
import Post from '../components/Post';

function HomePage() {

  const isLoggedIn = useSelector(state => !!state.auth.id);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  }

  if (!isLoggedIn) return <Redirect to='/login' />;

  return (
    <div className="home">
      <div className="home__header">
        <div className="home__navbar">
          <img className="navbar__logo" src={logo} alt="logo" />
          <button className='navbar__button' type='submit'>Profile</button>
          <button className='navbar__button' onClick={handleClick} type='submit'>Log Out</button>
        </div>
      </div>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default HomePage;
