import React, { useEffect, useContext, useCallback } from 'react'

//contexts
import ProductContext from '../../contexts/ProductContext';

//types
import { TYPES } from '../../constants/AcctionTypes'

//api
import { API, ROUTES } from '../../api/Api'

const Product = () => {

  // Use the values of contexts
  const productContext = useContext(ProductContext)

  const { products } = productContext.state

  useEffect(()=> {
    fechProductList();
  }, [])

  const fechProductList = useCallback(async () => {
    try {
      const response = await API.get(ROUTES.PRODUCTS)
      response.ok ?
      productContext.dispatch({
        type: TYPES.GET_PRODUCTS_SUCCESS,
        data: response.data
      })
      :
      productContext.dispatch({
        type: TYPES.GET_PRODUCTS_FAILED,
        error: response.error
      })
    } catch (error) {
      productContext.dispatch({
        type: TYPES.GET_PRODUCTS_FAILED,
        error: error
      })
    }
  })

  return (
    <div className='account-detail'>
     <h1>product list</h1>
    </div>
  )
}

export default Product
