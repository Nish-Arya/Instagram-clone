import React from 'react'
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import SignupPage from './SignupPage';

export default function Pages() {
  return (
    <>
      <Route path='/login' component={LoginPage} />
      <Route path='/signup' component={SignupPage} />
      <Route path='/' component={HomePage} />
    </>
  )
}
