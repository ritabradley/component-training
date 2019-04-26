import React from 'react';
import Comment from '../components/Comment';
import Faker from 'faker';
const App = () => {
  return (
    <section style={{ margin: '100px auto' }} className='ui comments'>
      <Comment
        author={Faker.name.firstName()}
        avatar={Faker.image.avatar()}
        comment={Faker.lorem.words()}
        timePosted='Today at 3:24PM'
      />
      <Comment
        author={Faker.name.firstName()}
        avatar={Faker.image.avatar()}
        comment={Faker.lorem.words()}
        timePosted='Yesterday at 10:52AM'
      />
      <Comment
        author={Faker.name.firstName()}
        avatar={Faker.image.avatar()}
        comment={Faker.lorem.words()}
        timePosted='Monday at 11:11PM'
      />
    </section>
  );
};

export default App;
