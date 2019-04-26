import React from 'react';

const Comment = props => {
  const { author, avatar, comment, timePosted } = props;
  return (
    <div className='comment three column row'>
      <a href='/' className='avatar'>
        <img src={avatar} alt='user avatar' />
      </a>
      <div className='content'>
        <a className='author' href='/'>
          {author}
        </a>
        <div className='metadata'>
          <span className='date'>{timePosted}</span>
        </div>
        <div className='text'>{comment}</div>
        <div className='actions'>
          <a className='reply' href='/'>
            Reply
          </a>
        </div>
      </div>
    </div>
  );
};

export default Comment;
