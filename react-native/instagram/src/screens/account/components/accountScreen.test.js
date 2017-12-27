// Components
import AccountScreen from './AccountScreen'

// Mocking data
import { users, photos } from '@test/__mocks__/sample-data'

describe('AccountScreen', () => {
  let treeDOM
  const mockLoadAccountData = jest.fn(),
    accountData = users[0],
    allPhotos = photos

  beforeEach(() => {
    treeDOM = renderer.create(
      <AccountScreen
        accountData={accountData}
        allPhotos={allPhotos}
        loadAccountData={mockLoadAccountData}
      />
    )
  })

  it('Renders correctly', () => {
    expect(treeDOM).toMatchSnapshot()
  })
})
