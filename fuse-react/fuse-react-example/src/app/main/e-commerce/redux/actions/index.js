import { createActions } from 'reduxsauce'

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

const eCommerceAction = {
  Types,
  Creators,
}

export default eCommerceAction
