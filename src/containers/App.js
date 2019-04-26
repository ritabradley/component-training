import React from 'react';
import Comment from '../components/Comment';
const App = () => {
  return (
    <section className='ui container comments'>
      <Comment />
      <Comment />
      <Comment />
    </section>
  );
};

export default App;
