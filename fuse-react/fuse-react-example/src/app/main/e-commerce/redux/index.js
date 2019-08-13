import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

export const { Types, Creators } = createActions({
  getProductsProcessing: null,
  getProductsSuccess: null,
  getProductsFailed: null,
  getProductDetailProcessing: ['productId'],
  getProductDetailSuccess: null,
  getProductDetailFailed: null,
})

const InitialState = Immutable({
  productList: [],
  isProcessing: false,
  productEditing: {
    tags: '',
    categories: [],
    description: [],
    name: '',
    handle: '',
    featuredImageId: 1,
    active: false,
  },
})

const getProductsProcessing = (state, action) => {
  return state.merge({
    isProcessing: true,
  })
}

const getProductsSuccess = (state, action) => {
  return state.merge({
    isProcessing: false,
    productList: action.productList,
  })
}

const getProductsFailed = (state, action) =>
  state.merge({
    isProcessing: false,
  })

const getProductDetailProcessing = (state, action) =>
  state.merge({
    isProcessing: true,
  })

const getProductDetailSuccess = (state, action) =>
  state.merge({
    isProcessing: false,
    productEditing: action.productEditing,
  })

const getProductDetailFailed = (state, action) =>
  state.merge({
    isProcessing: false,
  })

// Assign handler to types.
const HANDLERS = {
  [Types.GET_PRODUCTS_PROCESSING]: getProductsProcessing,
  [Types.GET_PRODUCTS_SUCCESS]: getProductsSuccess,
  [Types.GET_PRODUCTS_FAILED]: getProductsFailed,
  [Types.GET_PRODUCT_DETAIL_PROCESSING]: getProductDetailProcessing,
  [Types.GET_PRODUCT_DETAIL_SUCCESS]: getProductDetailSuccess,
  [Types.GET_PRODUCT_DETAIL_FAILED]: getProductDetailFailed,
}

// Create reducers by pass state and handlers
export const eCommerceReducer = createReducer(InitialState, HANDLERS)
