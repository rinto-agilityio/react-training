import React, { useEffect, useState } from 'react'
import { Table, TablePagination } from '@material-ui/core'
import { FuseScrollbars } from '@fuse'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import TableHeadProduct from './TableHeadProduct'
import TableBodyProduct from './TableBodyProducts'
import { AppConfig } from '../../config/AppConfig'
import { getFilteredArray } from '../../../../utils'

const ProductsTable = ({ productList, getProductsProcessing, history, deleteProduct, searchText }) => {
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState(null)
  const [selected, setSlected] = useState([])
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(AppConfig.rowsPerPage)

  /**
   * Effect get list products
   */
  useEffect(() => {
    getProductsProcessing()
  }, [])

  /**
   * Set again productList state if recevice new data
   */
  useEffect(() => {
    setData(productList)
  }, [productList.length])

  useEffect(() => {
    const datafilter = getFilteredArray(productList, searchText)
    setData(datafilter)
  }, [searchText])

  /**
   * Handle when user check select all product
   */
  const handleSelectAll = event => {
    const itemSlected = data.map(item => item.id)
    if (event.target.checked) {
      setSlected(itemSlected)
      return
    }
    setSlected([])
  }

  /**
   * Handle when user click sort
   */
  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc'
    setOrder(isDesc ? 'asc' : 'desc')
    setOrderBy(property)
  }

  /**
   * handle when user check select item product
   */
  const handleSelectItem = id => {
    const selectedIndex = selected.indexOf(id)
    const newSelected =
      selectedIndex === -1
        ? selected.concat(id)
        : selected.filter(item => item !== id)
    setSlected(newSelected)
  }

  /**
   * Handle when change page of table product
   */
  const handleChangePage = (event, page) => {
    setPage(page)
  }
  /**
   * Handle when user need change number row will show per page
   */
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value)
  }

  /**
   * handle when user click a item product
   * redirect to detial page with item checked
   * @param {string} id
   */
  const handleClickRowItem = id => {
    history.push(`/e-commerce/products/${id}`)
  }

  /**
   * Delete list product checked
   */
  const handleDeleteProduct = () => deleteProduct(selected)

  /**
   * Check item product checked or not
   */
  const checkSelected = id => selected.indexOf(id) !== -1

  return (
    <div className="w-full flex flex-col">
      <FuseScrollbars className="flex-grow overflow-x-auto">
        <Table className="min-w-xl" aria-labelledby="tableTitle">
          <TableHeadProduct
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAll}
            onRequestSort={handleRequestSort}
            rowCount={data.length}
            handleDeleteProduct={handleDeleteProduct}
          />

          <TableBodyProduct
            data={data}
            checkSelected={checkSelected}
            handleSelectItem={handleSelectItem}
            orderBy={orderBy}
            order={order}
            page={page}
            rowsPerPage={rowsPerPage}
            handleClickRowItem={handleClickRowItem}
          />
        </Table>
      </FuseScrollbars>

      <TablePagination
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  )
}

ProductsTable.propTypes = {
  productList: PropTypes.array,
  getProductsProcessing: PropTypes.func,
  history: PropTypes.object,
  deleteProduct: PropTypes.func,
  searchText: PropTypes.string,
}

ProductsTable.defaultProps = {
  productList: [],
  getProductsProcessing: () => {},
  history: {},
  deleteProduct: () => {},
  searchText: '',
}

export default withRouter(ProductsTable)
