import React from 'react'
import {
  Icon,
  TableBody,
  TableCell,
  TableRow,
  Checkbox,
} from '@material-ui/core'
import classNames from 'classnames'
import _ from '@lodash'

const TableBodyProduct = ({ data }) => {
  const renderListProduct = data.map(item => {
    return (
      <TableRow
      // className="h-64 cursor-pointer"
      // hover
      // role="checkbox"
      // aria-checked={isSelected}
      // tabIndex={-1}
      // key={n.id}
      // selected={isSelected}
      // onClick={event => this.handleClick(n)}
      >
        <TableCell className="w-48 pl-4 sm:pl-12" padding="checkbox">
          <Checkbox
          // checked={isSelected}
          // onClick={event => event.stopPropagation()}
          // onChange={event => this.handleCheck(event, n.id)}
          />
        </TableCell>

        <TableCell className="w-52" component="th" scope="row" padding="none">
          {item.images.length > 0 ? (
            <img
              className="w-full block rounded"
              src={_.find(item.images, { id: item.featuredImageId }).url}
              alt={item.name}
            />
          ) : (
            <img
              className="w-full block rounded"
              src="assets/images/ecommerce/product-image-placeholder.png"
              alt={item.name}
            />
          )}
        </TableCell>

        <TableCell component="th" scope="row">
          {item.name}
        </TableCell>

        <TableCell className="truncate" component="th" scope="row">
          {item.categories.join(', ')}
        </TableCell>

        <TableCell component="th" scope="row" align="right">
          <span>$</span>
          {item.priceTaxIncl}
        </TableCell>

        <TableCell component="th" scope="row" align="right">
          {item.quantity}
          <i
            className={classNames(
              'inline-block w-8 h-8 rounded ml-8',
              item.quantity <= 5 && 'bg-red',
              item.quantity > 5 && item.quantity <= 25 && 'bg-orange',
              item.quantity > 25 && 'bg-green'
            )}
          />
        </TableCell>

        <TableCell component="th" scope="row" align="right">
          {item.active ? (
            <Icon className="text-green text-20">check_circle</Icon>
          ) : (
            <Icon className="text-red text-20">remove_circle</Icon>
          )}
        </TableCell>
      </TableRow>
    )
  })

  return <TableBody>{renderListProduct}</TableBody>
}

export default TableBodyProduct
