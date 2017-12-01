import { users, photos } from '@test/__mocks__/sample-data'

import AccountScreen from './AccountScreen'

describe('AccountScreen', () => {
  let treeDOM
  const accountData = users[0],
    myPhotos = photos

  beforeEach(() => {
    treeDOM = renderer.create(
      <AccountScreen accountData={accountData} myPhotos={myPhotos} />
    )
  })

  it('Renders correctly', () => {
    expect(treeDOM).toMatchSnapshot()
  })
})
