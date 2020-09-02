import React from 'react';
import './Post.css';
import image from '../images/jumbo.png'
import Avatar from '@material-ui/core/Avatar';

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar">U</Avatar>
        <h4>Username</h4>
      </div>
      <img className="post__image" src={image} alt={image} />
      <div className="post__footer">
        <div className="footer__caption"><b>Username </b>Caption goes here!</div>
      </div>
    </div>
  )
}

export default Post;
