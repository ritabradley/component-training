import React from 'react';
import Faker from 'faker';

const Comment = () => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img src={Faker.image.avatar()} alt='user avatar' />
      </a>
      <div className='content'>
        <a className='author' href='/'>
          {Faker.name.firstName()}
        </a>
        <div className='metadata'>
          <span className='date'>Today at 3:34PM</span>
        </div>
        <div className='text'>{Faker.lorem.words()}</div>
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
