import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post({ imageUrl, caption, User}) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar">{User.username[0]}</Avatar>
        <h4>{User.username}</h4>
      </div>
      <img className="post__image" src={imageUrl} alt="Cute pets" />
      <div className="post__footer">
      <div className="footer__caption"><b>{User.username} </b>{caption}</div>
      </div>
    </div>
  )
}

export default Post;
