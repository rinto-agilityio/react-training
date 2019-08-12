import React from 'react'
import { TableBody } from '@material-ui/core'
import _ from 'lodash'

import TableRowProduct from './TableRowProduct'

const TableBodyProduct = ({
  data,
  checkSelected,
  handleSelectItem,
  order,
  orderBy,
  page,
  rowsPerPage,
}) => {
  return (
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
        [order]
      )
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map(row => {
          return (
            <TableRowProduct
              index
              isSelected={checkSelected(row.id)}
              handleSelectItem={handleSelectItem}
              {...row}
            />
          )
        })}
    </TableBody>
  )
}

export default TableBodyProduct
