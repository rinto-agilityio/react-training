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
  deleteProductProcessing: ['listId'],
  deleteProductSuccess: null,
  deleteProductFailed: null,
  getValueSearch: ['value'],
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
    sku: '',
    width: '1cm',
    height: '1cm',
    depth: '1cm',
    weight: '1kg',
    extraShippingFee: 0,
    active: false,
  },
  searchText: '',
})

const getProductsProcessing = state => (
  state.merge({
    isProcessing: true,
  })
)

const getProductsSuccess = (state, action) => (
  state.merge({
    isProcessing: false,
    productList: action.productList,
  })
)

const getProductsFailed = state => (
  state.merge({
    isProcessing: false,
  })
)

const getProductDetailProcessing = state => (
  state.merge({
    isProcessing: true,
  })
)

const getProductDetailSuccess = (state, action) => (
  state.merge({
    isProcessing: false,
    productEditing: action.productEditing,
  })
)

const getProductDetailFailed = state => (
  state.merge({
    isProcessing: false,
  })
)

const updateProductProcessing = state => (
  state.merge({
    isProcessing: true,
  })
)

const updateProductSuccess = state => (
  state.merge({
    isProcessing: false,
  })
)

const updateProductFailed = state => (
  state.merge({
    isProcessing: false,
  })
)

const addNewProductProcessing = state => (
  state.merge({
    isProcessing: false,
  })
)

const addNewProductSuccess = (state, action) => (
  state.merge({
    isProcessing: false,
    productList: [action.product, ...state.productList],
  })
)

const addNewProductFailed = state => (
  state.merge({
    isProcessing: false,
  })
)

const deleteProductProcessing = state => (
  state.merge({
    isProcessing: false,
  })
)

const deleteProductSuccess = (state, action) => (
  state.merge({
    isProcessing: false,
    productList: action.products,
  })
)

const deleteProductFailed = state => (
  state.merge({
    isProcessing: false,
  })
)

const getValueSearch = (state, action) => (
  state.merge({
    searchText: action.value,
  })
)

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
  [Types.DELETE_PRODUCT_PROCESSING]: deleteProductProcessing,
  [Types.DELETE_PRODUCT_SUCCESS]: deleteProductSuccess,
  [Types.DELETE_PRODUCT_FAILED]: deleteProductFailed,
  [Types.GET_VALUE_SEARCH]: getValueSearch
}

// Create reducers by pass state and handlers
export const eCommerceReducer = createReducer(InitialState, HANDLERS)
