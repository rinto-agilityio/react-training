import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//styles
import './App.css';

//import components
// import Toolbar from './components/Toolbar'
import NavigationBar from './components/NavigationBar'
import AccountProfile from './components/AccountProfile/index'
import Home from './components/homepage/Home'

//import providers
import AccountProvider from './providers/AccountProvider'

const App = () => {

  return (
    <div className='container'>
      <AccountProvider>
        <Router>
          <>
            <NavigationBar />
            <Switch>
              <Route
                exact
                path='/'
                render={Home}
              />
              <Route
                exact
                path='/account/profile'
                component={AccountProfile}
              />
            </Switch>

          </>
        </Router>
      </AccountProvider>
    </div>
  )
}

export default App
