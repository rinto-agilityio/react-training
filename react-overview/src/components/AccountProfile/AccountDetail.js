import React, { useContext } from 'react'

//contexts
import AccountContext from '../../contexts/AccountContext'

//style
import '../styles/AccountDetailStyle.css'
const AccountDetails = () => {

  // Use the values of contexts
  const accountContext = useContext(AccountContext)

  const { state } = accountContext

  return (
    <div className='account-detail'>
      <p>Username: {state.account.username}</p>
      <p>Date Joined: {state.account.dateJoined}</p>
      <p>Membership Level: {state.account.membershipLevel}</p>
    </div>
  )
}

export default AccountDetails
