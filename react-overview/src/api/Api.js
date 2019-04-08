// import libs
import { create } from 'apisauce'
// import App's config
import AppConfig from '../configs/AppConfigs'

export const ROUTES = {
  PRODUCTS: '/products'
}

export const API = create({
  baseURL: AppConfig.API_URL
})
