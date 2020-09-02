import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup, login } from '../store/auth';
import './SignupPage.css';
import logo from '../images/petgram-logo.png';
import { Redirect, Link } from 'react-router-dom';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(state => !!state.auth.id);
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    await dispatch(signup(username, email, password));
    dispatch(login(username, password));
  }

  const isFormValid = () => {
    return email && fullName && username && password;
  }

  if (isLoggedIn) return <Redirect to='/' />;

  return (
    <>
      <div className="signupPage">
        <div />
        <div className="loginFormContainer">
          <img id="logo2" src={logo} alt="Petgram logo" />
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
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
            <button type="submit" disabled={!isFormValid()}>Sign Up</button>
          </form>
          <div className="orContainer">
            <div className="orMargin" />
            <h3 id='or'>OR</h3>
            <div className="orMargin" />
          </div>
          <div className="signup-link">
            Already have an account? <Link to="/login">Log In</Link>
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

export default SignupPage;