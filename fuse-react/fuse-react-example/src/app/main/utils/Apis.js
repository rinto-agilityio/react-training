import axios from 'axios'

export const getProductApi = () => {
  return axios.get('/api/e-commerce-app/products')
}
