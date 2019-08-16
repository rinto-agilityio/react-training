import { combineReducers } from 'redux'
import auth from 'app/auth/store/reducers'
import quickPanel from 'app/fuse-layouts/shared-components/quickPanel/store/reducers'
import fuse from './fuse'

const createReducer = asyncReducers => (
  combineReducers({
    auth,
    fuse,
    quickPanel,
    ...asyncReducers,
  })
)

export default createReducer
