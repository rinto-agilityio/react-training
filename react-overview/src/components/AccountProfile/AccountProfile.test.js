import React from 'react';
import AccountDetail from './AccountDetail';
import '../../setupTests'
import ShallowRenderer from 'react-test-renderer/shallow';
import AcccountProvider from '../../providers/AccountProvider'

let realUseContext;
let useContextMock;

// Setup mock
beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = React.useContext = jest.fn();
});

// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});

describe('AccountDetail', () => {
  test('checking render account detail component', () => {

    const mockContextValue = useContextMock.mockReturnValue({
      account: {
        username: 'Rin To',
        dateJoined: '05/03/1990',
        membershipLevel: 'Silver'
      }
    });

    const element = new ShallowRenderer().render(
      <AcccountProvider value={mockContextValue}>
        <AccountDetail />
      </AcccountProvider>
    );

    expect(element).toMatchSnapshot();
  });
});
