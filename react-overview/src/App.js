import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//styles
import './App.css';

//import components
// import Toolbar from './components/Toolbar'
import NavigationBar from './components/NavigationBar'
import AccountProfile from './components/AccountProfile/index'

const dataAccount = {
  username: 'Crunchy Crunch',
  dateJoined: '9/1/18',
  membershipLevel: 'Silver',
  updateAccount: (payload) => updateAccount(payload)
}
export const AccountContext = React.createContext(dataAccount) // default value

const [ account, setAccount ] = useState(dataAccount)

const updateAccount = (payload) => {
  setAccount({
    account: {
      ...account,
      payload
    }
  })
}
const App = () => {

  return (
    <AccountContext.Provider>
      <Router>
        <>
          <Switch>
            <Route
              exact
              path='/'
              render={() => <div>Home Page</div>}
            />
            <Route
              exact
              path='/account/profile'
              component={AccountProfile}
            />
          </Switch>

          <NavigationBar />
        </>
      </Router>
    </AccountContext.Provider>
  )
}

export default App;
