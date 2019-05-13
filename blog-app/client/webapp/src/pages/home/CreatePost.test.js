import { MockedProvider } from 'react-apollo/test-utils';
import { CREATE_POST } from '../../graphql/post/mutations';
import { BrowserRouter } from 'react-router-dom';
import wait from 'waait';

import CreatePost from './CreatePost';

const mocks = [
  {
    request: {
      query: CREATE_POST,
      variables: {
        id: '1ABCD',
        title: 'title',
        content: 'content',
        authorId: '1557377599679'
      },
    },
    result: {
      data: {
        createPost: {
          id: '1ABCD',
          title: 'title',
          content: 'content',
          author: {
            name: 'rinto'
          }
        }
    }},
  },
];

describe('Test HomePage', () => {
  let renderComponent;
  beforeEach(() => {
    const props = {
      history: {
        push: jest.fn()
      }
    };


    renderComponent = mount(
      <MockedProvider mocks={mocks} addTypename={false} >
        <BrowserRouter>
          <CreatePost {...props}/>
        </BrowserRouter>
      </MockedProvider>
    );
  });

  it('Test HomePage render with client props:', async () => {

    const handleCloseModal = jest.fn();

    renderComponent.find('form').simulate('submit');

    await wait(0);

    const mutation = renderComponent.find('Mutation');
    mutation.props().onCompleted();
    expect(handleCloseModal).toBeCalled();
  });
});
