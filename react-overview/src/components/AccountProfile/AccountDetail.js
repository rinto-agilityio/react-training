import React from 'react'

import { AccountContextWrapper } from '../../contexts/AccountContextWrapper'

const AccountDetails = account => (
  <div>
    <p>Username: {account.username}</p>
    <p>Date Joined: {account.dateJoined}</p>
    <p>Membership Level: {account.membershipLevel}</p>
  </div>
)

export default AccountContextWrapper(AccountDetails)
