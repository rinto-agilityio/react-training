import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

export const { Types, Creators } = createActions({
  getProductsProcessing: null,
  getProductsSuccess: null,
  getProductsFailed: null,
  getProductDetailProcessing: ['productId'],
  getProductDetailSuccess: null,
  getProductDetailFailed: null,
  updateProductProcessing: ['data'],
  updateProductSuccess: null,
  updateProductFailed: null,
  addNewProductProcessing: ['data'],
  addNewProductSuccess: null,
  addNewProductFailed: null,
})

const InitialState = Immutable({
  productList: [],
  isProcessing: false,
  productEditing: {
    id: '',
    name: '',
    handle: '',
    description: '',
    tags: [],
    featuredImageId: 4,
    images: [],
    priceTaxExcl: 0,
    priceTaxIncl: 0,
    taxRate: 0,
    comparedPrice: 0,
    quantity: 0,
    sku: 'A445BV',
    width: '1cm',
    height: '1cm',
    depth: '1cm',
    weight: '1kg',
    extraShippingFee: 0,
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

const updateProductProcessing = (state, action) =>
  state.merge({
    isProcessing: true,
  })

const updateProductSuccess = (state, action) =>
  state.merge({
    isProcessing: false,
  })

const updateProductFailed = (state, action) =>
  state.merge({
    isProcessing: false,
  })

const addNewProductProcessing = (state, action) =>
  state.merge({
    isProcessing: false,
  })

const addNewProductSuccess = (state, action) =>
  state.merge({
    isProcessing: false,
    productList: [action.product, ...state.productList],
  })

const addNewProductFailed = (state, action) =>
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
  [Types.UPDATE_PRODUCT_PROCESSING]: updateProductProcessing,
  [Types.UPDATE_PRODUCT_SUCCESS]: updateProductSuccess,
  [Types.UPDATE_PRODUCT_FAILED]: updateProductFailed,
  [Types.ADD_NEW_PRODUCT_PROCESSING]: addNewProductProcessing,
  [Types.ADD_NEW_PRODUCT_SUCCESS]: addNewProductSuccess,
  [Types.ADD_NEW_PRODUCT_FAILED]: addNewProductFailed,
}

// Create reducers by pass state and handlers
export const eCommerceReducer = createReducer(InitialState, HANDLERS)
