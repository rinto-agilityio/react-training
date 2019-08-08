import React, { useEffect } from 'react'
import { Table } from '@material-ui/core'
import { FuseScrollbars } from '@fuse'
import { withRouter } from 'react-router-dom'
import TableHeadProduct from './TableHeadProduct'
import TableBodyProduct from './TableBodyProducts'

const ProductsTable = ({ productList, getProductsProcessing }) => {
  // const [order, setOrder] = useState('asc')
  // const [orderBy, setOrderBy] = useState(null)
  // const [selected, setSlected] = useState([])
  // const [page, setPage] = useState(0)
  // const [rowsPerPage, setRowsPerPage] = useState(10)
  // const [data, setData] = useState([])

  useEffect(() => {
    getProductsProcessing()
  }, [])

  return (
    <div className="w-full flex flex-col">
      <FuseScrollbars className="flex-grow overflow-x-auto">
        <Table className="min-w-xl" aria-labelledby="tableTitle">
          <TableHeadProduct
          // numSelected={selected.length}
          // order={order}
          // orderBy={orderBy}
          // onSelectAllClick={this.handleSelectAllClick}
          // onRequestSort={this.handleRequestSort}
          // rowCount={data.length}
          />

          <TableBodyProduct data={productList} />
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
