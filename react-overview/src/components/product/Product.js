import React, { useEffect } from 'react'
import { getProduct } from '../../services/ProductService'

const Product = () => {

  useEffect(()=> {
    getProduct();
  })
  return (
    <div className='account-detail'>
     <h1>product list</h1>
    </div>
  )
}

export default Product
