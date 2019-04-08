import React, { useEffect, useContext } from 'react'
import { getProduct } from '../../services/ProductService'

//contexts
import ProductContext from '../../contexts/ProductContext';

const Product = () => {

  // Use the values of contexts
  const productContext = useContext(ProductContext)

  const { state } = productContext
  
  console.log('state', state);
  
  useEffect(()=> {
    getProduct();
  }, [])

  return (
    <div className='account-detail'>
     <h1>product list</h1>
    </div>
  )
}

export default Product
