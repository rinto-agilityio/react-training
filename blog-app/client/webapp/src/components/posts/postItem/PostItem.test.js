import PostItem from './PostItem';
import wait from 'waait';

import { MockedProvider } from 'react-apollo/test-utils';
import { DELETE_POST } from '../../../graphql/post/mutations';

describe('Test PostList', () => {
  const props = {
    history: {
      push: jest.fn()
    }
  };

  it('Test PostList render:', async () => {
    const mocksClient = [
      {
        request: {
          query: DELETE_POST,
          variables: {
            id: '1557799396370',
          }
        },
        result: {
          data: {
            deletePost: {
              post: {
                id: '1557799396370',
                title: 'title123',
                content: 'content123'
              }
            }
          }
        },
      },
    ];

    const component = mount(
      <MockedProvider mocks={mocksClient} addTypename={false}>
        <PostItem {...props}/>
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
    const button = component.find('button').at(1);

    const mutationProps = component.find('Mutation').props();

    button.simulate('click');

    await wait(10);

    mutationProps.onCompleted();
  });
});
