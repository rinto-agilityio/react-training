import  React, { useState, useContext } from 'react'

//contexts
import AccountContext from '../../contexts/AccountContext'

//Types
import
  { TYPES }
from '../../constants/AcctionTypes'

//styles
import '../styles/AccountDetailStyle.css'

const FormUpdateAccount = () => {

  // Use the values of contexts
  const accountContext = useContext(AccountContext)

  const [account, setAccount ] = useState(accountContext.state);

  /**
   * Handle onChange
   * @param {event}
   * Update state count when user onChange
   */
  const handleOnChange = (e) => {

    const { name, value } = e.target;

    setAccount(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  /**
   * dispath action update infor profile user when click save button
   */
  const handleSubmitSave = (e) => {
    e.preventDefault()
    accountContext.dispatch({
      type: TYPES.UPDATE_PROFILE,
      data: account
    })
  }

  return (
    <div className='wrapper-profile-form'>
      <form>
        <label>FORM UPDATE PROFILE</label>
        <div className='input-group'>
          <label htmlFor="username" className='label'>New Username</label>
          <div className='field-name'>
            <input
              type="text"
              name="username"
              value={account.username}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className='input-group'>
          <label htmlFor="membershipLevel" className='label'>Membership Level</label>
          <div className='field-name'>
            <select
              value={account.membershipLevel}
              name="membershipLevel"
              onChange={handleOnChange}
            >
              <option value='Bronze'>Bronze</option>
              <option value='Silver'>Silver</option>
              <option value='Gold'>Gold</option>
            </select>
          </div>
        </div>
        <button onClick={handleSubmitSave}>Save</button>
      </form>
    </div>
  )
}

export default FormUpdateAccount
