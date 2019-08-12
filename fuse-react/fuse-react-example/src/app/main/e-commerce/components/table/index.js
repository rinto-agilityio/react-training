import React, { useEffect, useState } from 'react'
import { Table } from '@material-ui/core'
import { FuseScrollbars } from '@fuse'
import { withRouter } from 'react-router-dom'
import TableHeadProduct from './TableHeadProduct'
import TableBodyProduct from './TableBodyProducts'

const ProductsTable = ({ productList, getProductsProcessing }) => {
  // const [order, setOrder] = useState('asc')
  // const [orderBy, setOrderBy] = useState(null)
  // const [page, setPage] = useState(0)
  // const [rowsPerPage, setRowsPerPage] = useState(10)
  const [selected, setSlected] = useState([])
  const [data, setData] = useState([])

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
      return;
    }
    setSlected([])
  }

  const handleSelectItem = id => {
    const selectedIndex = selected.indexOf(id)
    const newSelected = selectedIndex === -1 ?
      selected.concat(id) :
      selected.filter(item => item !== id)
    setSlected(newSelected)
  }
  const checkSelected = id => selected.indexOf(id) !== -1;

  return (
    <div className="w-full flex flex-col">
      <FuseScrollbars className="flex-grow overflow-x-auto">
        <Table className="min-w-xl" aria-labelledby="tableTitle">
          <TableHeadProduct
          numSelected={selected.length}
          // order={order}
          // orderBy={orderBy}
          onSelectAllClick={handleSelectAll}
          // onRequestSort={this.handleRequestSort}
          rowCount={data.length}
          />

          <TableBodyProduct
            data={productList}
            checkSelected={checkSelected}
            handleSelectItem={handleSelectItem}
          />
        </Table>
      </FuseScrollbars>

      {/* <TablePagination
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "Previous Page"
        }}
        nextIconButtonProps={{
          "aria-label": "Next Page"
        }}
        onChangePage={this.handleChangePage}
        onChangeRowsPerPage={this.handleChangeRowsPerPage}
      /> */}
    </div>
  )
}

export default withRouter(ProductsTable)
