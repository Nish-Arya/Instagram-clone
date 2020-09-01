import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { Redirect, Link } from 'react-router-dom';
import './LoginPage.css';
import logo from '../images/petgram-logo.png';
import dogAndCat from "../images/dog-and-cat.png";

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(state => !!state.auth.id);
  const dispatch = useDispatch();
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(username, password));
  }

  const handleDemoUser = e => {
    // e.preventDefault();
    dispatch(login('Demo-lition', 'password'));
  }

  const isFormValid = () => {
    return username && password;
  }

  if (isLoggedIn) return <Redirect to='/' />;

  return (
    <>
      <div className="loginPage">
        <div />
        <div className="dog-and-cat__holder">
          <img className="dog-and-cat" src={dogAndCat} alt="Dog and cat" />
        </div>
        <div className="loginFormContainer">
          <img id="logo" src={logo} alt="Petgram logo" />
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" disabled={!isFormValid()}>Log In</button>
            <button id='demoUser' type="submit" onClick={handleDemoUser}>Log In As Demo User</button>
          </form>
          <div className="orContainer">
            <div className="orMargin" />
            <h3 id='or'>OR</h3>
            <div className="orMargin" />
          </div>
          <div className="signup-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
        <div />
      </div>
      <footer>
        <a href="https://github.com/Nish-Arya/Instagram-clone/wiki">ABOUT</a>
        <a href="https://github.com/Nish-Arya">GITHUB</a>
        <a href="https://www.linkedin.com/in/nish-arya-53727a16a/">LINKEDIN</a>
        <h5>© 2020 PETGRAM BY NISH</h5>
      </footer>
    </>
  );
}

export default LoginPage
