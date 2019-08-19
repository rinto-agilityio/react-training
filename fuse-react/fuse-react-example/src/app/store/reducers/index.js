import { combineReducers } from 'redux'
import auth from 'app/auth/redux'
import quickPanel from 'app/fuse-layouts/shared-components/quickPanel/store/reducers'
import { eCommerceReducer } from 'app/main/e-commerce/redux'
import fuse from './fuse'

const createReducer = asyncReducers => (
  combineReducers({
    auth,
    fuse,
    quickPanel,
    eCommerceReducer,
    ...asyncReducers,
  })
)

export default createReducer
