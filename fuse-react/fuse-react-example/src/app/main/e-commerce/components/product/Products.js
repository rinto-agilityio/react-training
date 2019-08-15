import React, { useState }from 'react'
import { FusePageCarded } from '@fuse'
import ProductsTable from '../../containers/table'
import ProductListHeader from '../headers/ProductListHeader'

const Products = ({ getValueSearch }) => {
  const [searchText, setSearchText] = useState('')

  const handleSearch = (event) => {
    setSearchText(event.target.value)
    getValueSearch(event.target.value)
  }

  return (
    <FusePageCarded
      classes={{
        content: 'flex',
        header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
      }}
      header={<ProductListHeader handleSearch={handleSearch} searchText={searchText} />}
      content={<ProductsTable />}
      innerScroll
    />
  )
}

export default Products
