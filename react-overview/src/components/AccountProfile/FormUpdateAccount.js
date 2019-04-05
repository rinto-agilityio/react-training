import  React, { useState } from 'react'

import { AccountContextWrapper } from '../../contexts/AccountContextWrapper'

const FormUpdateAccount = context => {

  const [ account, setAccount ] = useState(context)

  const handleOnChange = ({ target: { value, name }}) => {
    setAccount({
     [name]: value
    })
  }

  return (
    <div>
      <form>
        <></>
        <label htmlFor="username">New Username</label>
        <div>
          <input
            type="text"
            name="username"
            value={context.username}
            onChange={handleOnChange}
          />
        </div>
        <label htmlFor="membershipLevel">Membership Level</label>
        <div>
          <select
            value={context.membershipLevel}
            name="membershipLevel"
            onChange={handleOnChange}
          >
            <option value='Bronze'>Bronze</option>
            <option value='Silver'>Silver</option>
            <option value='Gold'>Gold</option>
          </select>
        </div>
        <button>Save</button>
      </form>
    </div>
  )
}

export default AccountContextWrapper(FormUpdateAccount)
