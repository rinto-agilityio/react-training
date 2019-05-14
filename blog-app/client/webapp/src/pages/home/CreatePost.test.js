import { MockedProvider } from 'react-apollo/test-utils';
import { CREATE_POST, EDIT_POST } from '../../graphql/post/mutations';

import { Form } from 'react-bootstrap';

import CreatePost from './CreatePost';

const mocksClient = [
  {
    request: {
      query: EDIT_POST,
      variables: {
        post:{
          id: '1557799396370',
          title: 'title123',
          content: 'content123',
          authorId: '1557377599679'
        }
      }
    },
    result: {
      data: {
        editPost: {
          id: '1557799396370',
          title: 'title123',
          content: 'content123'
        }
      }
    },
  },
];

const mocks = [
  {
    request: {
      query: CREATE_POST,
      variables: {
        id: '1557799396370',
        title: 'title123',
        content: 'content123',
        authorId: '1557377599679'
      }
    },
    result: {
      data: {
        createPost: {
          id: '1557799396370',
          title: 'title123',
          content: 'content123',
          author: {
            name: 'rinto'
          }
        }
      }
    }
  }
];

describe('Test CreatePost', () => {

  it('Test CreatePost mutation:', async () => {
    const props = {
      history: {
        push: jest.fn()
      },
      isEdit: false,
      handleCloseModal: jest.fn()
    };

    const renderComponent = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CreatePost {...props}/>
      </MockedProvider>
    );

    renderComponent.find(Form).simulate('submit', {
        preventDefault: jest.fn()
      }
    );

    // await wait(0);
    renderComponent.update();
    const mutation = renderComponent.find('Mutation');
    mutation.props().onCompleted();
    expect(props.handleCloseModal).toBeCalled();
  });

  it.skip('Test EditPost mutation:', async () => {
    const props = {
      history: {
        push: jest.fn()
      },
      isEdit: true,
      handleCloseModal: jest.fn()
    };
    const renderComponent = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CreatePost {...props}/>
      </MockedProvider>
    );

    renderComponent.find(Form).simulate('submit', {
        preventDefault: jest.fn()
      }
    );

    // await wait(0);
    renderComponent.update();
    const mutation = renderComponent.find('Mutation');
    mutation.props().onCompleted();
    expect(props.handleCloseModal).toBeCalled();
  });
});
