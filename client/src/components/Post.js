import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import { sendComment } from '../store/posts';

function Post({ id, imageUrl, caption, User, Comments}) {

  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.id);
  const username = useSelector(state => state.auth.username);

  useEffect(() => {
    
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(sendComment(id, userId, comment, username));
    setComment('');
    window.location.reload();
  }

  const isEmpty = () => {
    return !comment;
  }

  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar">{User.username[0]}</Avatar>
        <h4>{User.username}</h4>
      </div>
      <img className="post__image" src={imageUrl} alt="Cute pets" />
      <div className="post__footer">
        <div className="footer__caption"><b>{User.username} </b>{caption}</div>
        <ul className="footer__caption">
          {Comments.slice(0).reverse().map(comment => {
            return <div key={comment.id}>
              <b>{comment.body} </b>{comment.username}
            </div>
          })}
        </ul>
      </div>
      <form className='comment__form' onSubmit={handleSubmit}>
        <input 
        className="comment__input" 
        type='text' 
        placeholder='Add a comment...' 
        value={comment} 
        onChange={(e) => setComment(e.target.value)}
        />
        <button className="comment__button" type="submit" disabled={isEmpty()}>Post</button>
      </form>
    </div>
  )
}

export default Post;
