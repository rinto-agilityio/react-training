import React from 'react'
import { FusePageCarded } from '@fuse'
import ProductsTable from '../../containers/table'
import ProductListHeader from '../headers/ProductListHeader'

const Products = () => {
  return (
    <FusePageCarded
      classes={{
        content: 'flex',
        header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
      }}
      header={<ProductListHeader />}
      content={<ProductsTable />}
      innerScroll
    />
  )
}

export default Products
