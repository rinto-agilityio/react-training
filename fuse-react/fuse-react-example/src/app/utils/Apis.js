import axios from 'axios'

export const getProductApi = () => axios.get('/api/e-commerce-app/products')

export const getProductDetailApi = productId =>
  axios.get('/api/e-commerce-app/product', { params: productId })

export const updateProductApi = data =>
  axios.post('/api/e-commerce-app/product/save', data)

export const addNewProductApi = data =>
  axios.post('/api/e-commerce-app/product/add-new', data)

export const deleteProductApi = data =>
  axios.put('/api/e-commerce-app/products/delete', data)
