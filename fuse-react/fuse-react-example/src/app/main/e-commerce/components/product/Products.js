import React, { useEffect } from 'react'
import { FusePageCarded } from '@fuse'
// import ProductsTable from "./ProductsTable";
import ProductListHeader from '../headers/ProductListHeader'

const Products = ({ getProductsProcessing }) => {
  useEffect(() => {
    getProductsProcessing()
  }, [])

  return (
    <FusePageCarded
      classes={{
        content: 'flex',
        header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
      }}
      header={<ProductListHeader />}
      // content={<ProductsTable />}
      innerScroll
    />
  )
}

export default Products
