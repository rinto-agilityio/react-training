import React from 'react'
import {
  TableHead,
  TableSortLabel,
  TableCell,
  TableRow,
  Checkbox,
  Tooltip,
  withStyles,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import { rows } from '../../../../contants/DataRows'
import MoreAction from './MoreAction'

const styles = theme => ({
  actionsButtonWrapper: {
    background: theme.palette.background.paper,
  },
})

const TableHeadProduct = ({
  classes,
  onSelectAllClick,
  numSelected,
  rowCount,
  onRequestSort,
  orderBy,
  order,
  handleDeleteProduct,
}) => {
  const createSortHandler = property => event => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow className="h-64">
        <TableCell padding="checkbox" className="relative pl-4 sm:pl-12">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={event => onSelectAllClick(event)}
          />
          {numSelected > 0 && <MoreAction classes={classes} handleDeleteProduct={handleDeleteProduct} />}
        </TableCell>
        {rows.map(row => (
          <TableCell
            key={row.id}
            align={row.align}
            padding={row.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === row.id ? order : false}
          >
            {row.sort && (
              <Tooltip
                title="Sort"
                placement={
                  row.align === 'right' ? 'bottom-end' : 'bottom-start'
                }
                enterDelay={300}
              >
                <TableSortLabel
                  active={orderBy === row.id}
                  direction={order}
                  onClick={createSortHandler(row.id)}
                >
                  {row.label}
                </TableSortLabel>
              </Tooltip>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

TableHeadProduct.propTypes = {
  classes: PropTypes.object,
  onSelectAllClick: PropTypes.func,
  numSelected: PropTypes.number,
  rowCount: PropTypes.number,
  onRequestSort: PropTypes.func,
  orderBy: PropTypes.string,
  order: PropTypes.string,
  handleDeleteProduct: PropTypes.func,
}

TableHeadProduct.defaultProps = {
  classes: {},
  onSelectAllClick: () => {},
  numSelected: 0,
  rowCount: 0,
  onRequestSort: () => {},
  orderBy: '',
  order: '',
  handleDeleteProduct: () => {},
}


export default withStyles(styles, { withTheme: true })(TableHeadProduct)
