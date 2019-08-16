import React from 'react'
import { TableBody } from '@material-ui/core'
import _ from 'lodash'
import PropTypes from 'prop-types'

import TableRowProduct from './TableRowProduct'

const TableBodyProduct = ({
  data,
  checkSelected,
  handleSelectItem,
  order,
  orderBy,
  page,
  rowsPerPage,
  handleClickRowItem,
}) => (
  <TableBody>
    {_.orderBy(
      data,
      [
        o => {
          switch (orderBy) {
            case 'categories': {
              return o.categories[0]
            }
            default: {
              return o[orderBy]
            }
          }
        },
      ],
      [order],
    )
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((row, index) => (
        <TableRowProduct
          key={index}
          isSelected={checkSelected(row.id)}
          handleSelectItem={handleSelectItem}
          handleClickRowItem={handleClickRowItem}
          {...row}
        />
      ))
    }
  </TableBody>
)

TableBodyProduct.propTypes = {
  data: PropTypes.array,
  checkSelected: PropTypes.func,
  handleSelectItem: PropTypes.func,
  order: PropTypes.string,
  orderBy: PropTypes.string,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  handleClickRowItem: PropTypes.func,
}

TableBodyProduct.defaultProps = {
  data: [],
  checkSelected: () => {},
  handleSelectItem: () => {},
  order: '',
  orderBy: '',
  page: 0,
  rowsPerPage: 0,
  handleClickRowItem: () => {},
}

export default TableBodyProduct
