import axios from 'axios'

export const getProductApi = () => axios.get('/api/e-commerce-app/products')

export const getProductDetailApi = productId =>
  axios.get('/api/e-commerce-app/product', { params: productId })

export const updateProductApi = data =>
  axios.post('/api/e-commerce-app/product/save', data)
