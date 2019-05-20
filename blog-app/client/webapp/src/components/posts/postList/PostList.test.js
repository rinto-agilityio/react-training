import PostList from './PostList';

import { MockedProvider } from 'react-apollo/test-utils';

describe('Test PostList', () => {
  const props = {
    posts: [
      {
        id: '1557394571405',
        title: '33',
        content: '3',
        authorId: '1557377599679',
        author: {
          id: '1557377599679',
          email: 'rin.to@gmail.com',
          password: '123456',
          name: 'rinto'
        }
      }
    ],
    handleSubcriptionNewPost: jest.fn()
  };
  const component = shallow(
    <MockedProvider>
      <PostList {...props}/>
    </MockedProvider>
  );

  it('Test PostList render:', () => {
    expect(component).toMatchSnapshot();
  });
});
