import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
export const { Types, Creators } = createActions({
  getProductsProcessing: null,
  getProductsSuccess: null,
  getProductsFailed: null,
})

const InitialState = Immutable({
  productList: [],
  isProcessing: false,
})

const getProductsProcessing = (state, action) => {
  return state.merge({
    isProcessing: true,
  })
}

const getProductsSuccess = (state, action) => {
  return state.merge({
    isProcessing: false,
  })
}

const getProductsFailed = (state, action) => {
  return state.merge({
    isProcessing: false,
  })
}

// Assign handler to types.
const HANDLERS = {
  [Types.GET_PRODUCTS_PROCESSING]: getProductsProcessing,
  [Types.GET_PRODUCTS_SUCCESS]: getProductsSuccess,
  [Types.GET_PRODUCTS_FAILED]: getProductsFailed,
}

// Create reducers by pass state and handlers
export const eCommerceReducer = createReducer(InitialState, HANDLERS)
