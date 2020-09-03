import React from 'react'
import { Redirect } from 'react-router-dom';
import { logout } from '../store/auth';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../images/petgram-logo.png';
import './HomePage.css';
import Post from '../components/Post';
import HomeIcon from '@material-ui/icons/Home';

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
          <HomeIcon style={{ fontSize: 30 }} className='navbar__button__home' type='submit' />
          <button className='navbar__button__logout' onClick={handleClick} type='submit'>Log Out</button>
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
