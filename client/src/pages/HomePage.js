import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import { logout } from '../store/auth';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../images/petgram-logo.png';
import './HomePage.css';
import Post from '../components/Post';
import HomeIcon from '@material-ui/icons/Home';
import { getPosts } from '../store/posts';

function HomePage() {

  const isLoggedIn = useSelector(state => !!state.auth.id);
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      await dispatch(getPosts());
      setLoading(false);
    }
    loadPosts();
  }, [dispatch]);

  const handleClick = () => {
    dispatch(logout());
  }

  if (!isLoggedIn) return <Redirect to='/login' />;

  if (loading) return null;

  return (
    <>
    <div className="home__header">
      <div className="home__navbar">
        <img className="navbar__logo" src={logo} alt="logo" />
        <div />
        <HomeIcon style={{ fontSize: 30 }} className='navbar__button__home' type='submit' />
        <button className='navbar__button__logout' onClick={handleClick} type='submit'>Log Out</button>
      </div>
    </div>
    <div className="home">
      <div className="home__postContainer">
        {posts.slice(0).reverse().map(post => {
          return <Post key={post.id} {...post} />
        })}
      </div>
    </div>
    </>
  )
}

export default HomePage;
