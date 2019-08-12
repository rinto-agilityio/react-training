import React from 'react'
import { Icon, TableCell, TableRow, Checkbox } from '@material-ui/core'
import classNames from 'classnames'
import _ from '@lodash'

const TableRowProduct = ({ checkSelected, handleSelectItem, product }) => {
  return (
    <TableRow
      className="h-64 cursor-pointer"
      hover
      role="checkbox"
      // aria-checked={isSelected}
      // tabIndex={-1}
      key={product.id}
      // selected={isSelected}
      // onClick={event => this.handleClick(n)}
    >
      <TableCell className="w-48 pl-4 sm:pl-12" padding="checkbox">
        <Checkbox
          checked={checkSelected(product.id)}
          onClick={event => event.stopPropagation()}
          onChange={() => handleSelectItem(product.id)}
        />
      </TableCell>

      <TableCell className="w-52" component="th" scope="row" padding="none">
        {product.images.length > 0 ? (
          <img
            className="w-full block rounded"
            src={_.find(product.images, { id: product.featuredImageId }).url}
            alt={product.name}
          />
        ) : (
          <img
            className="w-full block rounded"
            src="assets/images/ecommerce/product-image-placeholder.png"
            alt={product.name}
          />
        )}
      </TableCell>

      <TableCell component="th" scope="row">
        {product.name}
      </TableCell>

      <TableCell className="truncate" component="th" scope="row">
        {product.categories.join(', ')}
      </TableCell>

      <TableCell component="th" scope="row" align="right">
        <span>$</span>
        {product.priceTaxIncl}
      </TableCell>

      <TableCell component="th" scope="row" align="right">
        {product.quantity}
        <i
          className={classNames(
            'inline-block w-8 h-8 rounded ml-8',
            product.quantity <= 5 && 'bg-red',
            product.quantity > 5 && product.quantity <= 25 && 'bg-orange',
            product.quantity > 25 && 'bg-green'
          )}
        />
      </TableCell>

      <TableCell component="th" scope="row" align="right">
        {product.active ? (
          <Icon className="text-green text-20">check_circle</Icon>
        ) : (
          <Icon className="text-red text-20">remove_circle</Icon>
        )}
      </TableCell>
    </TableRow>
  )
}

export default TableRowProduct
