import React, { useReducer } from 'react'
import Immutable from 'seamless-immutable';

//import context
import AccountContext from '../contexts/AccountContext'

//import reducer
import { AccountReducer } from '../reducers/AccountReducer'

let initState = Immutable({
  account: {
    username: 'Rin To',
    dateJoined: '05/03/1990',
    membershipLevel: 'Silver'
  }
})

const AccountProvider = ({children}) => {
  let [state, dispatch] = useReducer(AccountReducer, initState);

  const AccountContextValues = {
    state,
    dispatch
  }

  return <AccountContext.Provider
    value={AccountContextValues}
  >
    {children}
  </AccountContext.Provider>
}

export default AccountProvider
