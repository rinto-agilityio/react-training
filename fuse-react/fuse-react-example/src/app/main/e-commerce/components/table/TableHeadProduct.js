import React, { useState } from 'react'
import {
  TableHead,
  TableSortLabel,
  TableCell,
  TableRow,
  Checkbox,
  Tooltip,
  IconButton,
  Icon,
  Menu,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from '@material-ui/core'
import classNames from 'classnames'

const styles = theme => ({
  actionsButtonWrapper: {
    background: theme.palette.background.paper,
  },
})

const TableHeadProduct = ({ classes, onSelectAllClick, numSelected, rowCount }) => {
  const [selectedProductsMenu, setSelectedProductsMenu] = useState(null)

  const rows = [
    {
      id: 'image',
      align: 'left',
      disablePadding: true,
      label: '',
      sort: false,
    },
    {
      id: 'name',
      align: 'left',
      disablePadding: false,
      label: 'Name',
      sort: true,
    },
    {
      id: 'categories',
      align: 'left',
      disablePadding: false,
      label: 'Category',
      sort: true,
    },
    {
      id: 'priceTaxIncl',
      align: 'right',
      disablePadding: false,
      label: 'Price',
      sort: true,
    },
    {
      id: 'quantity',
      align: 'right',
      disablePadding: false,
      label: 'Quantity',
      sort: true,
    },
    {
      id: 'active',
      align: 'right',
      disablePadding: false,
      label: 'Active',
      sort: true,
    },
  ]

  const openSelectedProductsMenu = event => {
    setSelectedProductsMenu(event.currentTarget)
  }

  const closeSelectedProductsMenu = () => {
    setSelectedProductsMenu(null)
  }

  return (
    <TableHead>
      <TableRow className="h-64">
        <TableCell padding="checkbox" className="relative pl-4 sm:pl-12">
          <Checkbox
          indeterminate={numSelected > 0 && numSelected < rowCount}
          checked={numSelected === rowCount}
          onChange={event=> onSelectAllClick(event)}
          />
          {true && (
            <div
              className={classNames(
                'flex items-center justify-center absolute w-64 pin-t pin-l ml-68 h-64 z-10',
                classes.actionsButtonWrapper
              )}
            >
              <IconButton
                aria-owns={selectedProductsMenu ? 'selectedProductsMenu' : null}
                aria-haspopup="true"
                onClick={openSelectedProductsMenu}
              >
                <Icon>more_horiz</Icon>
              </IconButton>
              <Menu
                id="selectedProductsMenu"
                anchorEl={selectedProductsMenu}
                open={Boolean(selectedProductsMenu)}
                onClose={closeSelectedProductsMenu}
              >
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      // this.closeSelectedProductsMenu();
                    }}
                  >
                    <ListItemIcon className={classes.icon}>
                      <Icon>delete</Icon>
                    </ListItemIcon>
                    <ListItemText inset primary="Remove" />
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          )}
        </TableCell>
        {rows.map(row => {
          return (
            <TableCell
              key={row.id}
              align={row.align}
              padding={row.disablePadding ? 'none' : 'default'}
              // sortDirection={orderBy === row.id ? order : false}
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
                  // active={orderBy === row.id}
                  // direction={order}
                  // onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              )}
            </TableCell>
          )
        })}
      </TableRow>
    </TableHead>
  )
}

export default withStyles(styles, { withTheme: true })(TableHeadProduct)
