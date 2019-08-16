import '@fake-db'
import React from 'react'
import { createGenerateClassName, jssPreset } from '@material-ui/core'
import { FuseAuthorization, FuseLayout, FuseTheme } from '@fuse'
import JssProvider from 'react-jss/lib/JssProvider'
import { PersistGate } from 'redux-persist/integration/react'
import Provider from 'react-redux/es/components/Provider'
import { Router } from 'react-router-dom'
import { create } from 'jss'
import jssExtend from 'jss-extend'
import history from '../history'
import { Auth } from './auth'
import storeConfig from './store'
import AppContext from './AppContext'
import routes from './fuse-configs/routesConfig'

const jss = create({
  ...jssPreset(),
  plugins: [...jssPreset().plugins, jssExtend()],
})

jss.options.insertionPoint = document.getElementById('jss-insertion-point')
const generateClassName = createGenerateClassName()

const App = () => (
  <AppContext.Provider
    value={{
      routes,
    }}
  >
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <Provider store={storeConfig.store}>
        <PersistGate loading={null} persistor={storeConfig.persistor}>
          <Auth>
            <Router history={history}>
              <FuseAuthorization>
                <FuseTheme>
                  <FuseLayout />
                </FuseTheme>
              </FuseAuthorization>
            </Router>
          </Auth>
        </PersistGate>
      </Provider>
    </JssProvider>
  </AppContext.Provider>
)

export default App
