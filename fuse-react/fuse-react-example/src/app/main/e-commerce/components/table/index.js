import React, { useEffect, useState } from 'react'
import { Table, TablePagination } from '@material-ui/core'
import { FuseScrollbars } from '@fuse'
import { withRouter } from 'react-router-dom'
import TableHeadProduct from './TableHeadProduct'
import TableBodyProduct from './TableBodyProducts'
import { AppConfig } from '../../config/AppConfig'

const ProductsTable = ({
  productList,
  getProductsProcessing,
  history,
  getProductDetail,
}) => {
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState(null)
  const [selected, setSlected] = useState([])
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(AppConfig.rowsPerPage)
  useEffect(() => {
    getProductsProcessing()
    if (productList.length > 0) {
      setData(productList)
    }
  }, [productList.length])

  const handleSelectAll = event => {
    const itemSlected = data.map(item => item.id)
    if (event.target.checked) {
      setSlected(itemSlected)
      return
    }
    setSlected([])
  }

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc'
    setOrder(isDesc ? 'asc' : 'desc')
    setOrderBy(property)
  }

  const handleSelectItem = id => {
    const selectedIndex = selected.indexOf(id)
    const newSelected =
      selectedIndex === -1
        ? selected.concat(id)
        : selected.filter(item => item !== id)
    setSlected(newSelected)
  }

  const handleChangePage = (event, page) => {
    setPage(page)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value)
  }

  const handleClickRowItem = id => {
    history.push('/e-commerce/products/' + id)
  }

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
          />

          <TableBodyProduct
            data={productList}
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

export default withRouter(ProductsTable)
