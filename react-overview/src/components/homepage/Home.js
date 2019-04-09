import React from 'react'
import '../../setupTests'
//components
import Product from '../product/Product'

//import providers
import ProductProvider from '../../providers/ProductProvider'

const Home = () => {

  return (
    <ProductProvider>
      <Product />
    </ProductProvider>
  )
}

export default Home
