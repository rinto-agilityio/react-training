//import lib
import { useContext } from 'react'

import { API, ROUTES } from '../api/Api'

//contexts
import ProductContext from '../contexts/ProductContext';

import
  { TYPES }
from '../constants/AcctionTypes'

export const getProduct = () => {
  
  // Use the values of contexts
  const productContext = useContext(ProductContext)

  const response = API.get(ROUTES.PRODUCTS)

  if (response.ok) {
    productContext.dispatch({
      type: TYPES.GET_PRODUCTS_SUCCESS,
      data: response.data
    })
  }

}
