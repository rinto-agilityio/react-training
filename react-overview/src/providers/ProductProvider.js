import React, { useReducer } from 'react'
import Immutable from 'seamless-immutable';

//import context
import ProductContext from '../contexts/ProductContext'

//import reducer
import { ProductReducer } from './../reducers/ProductReducer';

let initState = Immutable({
  products: []
})

const ProductProvider = ({children}) => {
  let [state, dispatch] = useReducer(ProductReducer, initState);
  console.log('state-------', state);

  const ProductContextValues = {
    state,
    dispatch
  }
  console.log('ProductContextValues', ProductContextValues);

  return <ProductContext.Provider
    value={ProductContextValues}
  >
    {children}
  </ProductContext.Provider>
}

export default ProductProvider
