import { Types, Creators } from './'

describe('Account actions', () => {
  it('Return correct action type for loadAccountData', () => {
    const expectAction = { type: Types.LOAD_ACCOUNT_DATA }

    expect(Creators.loadAccountData()).toEqual(expectAction)
  })
})
