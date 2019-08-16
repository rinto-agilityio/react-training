import React, { memo } from 'react'
import { Icon, TableCell, TableRow, Checkbox } from '@material-ui/core'
import classNames from 'classnames'
import _ from '@lodash'
import whyDidYouRender from '@welldone-software/why-did-you-render'
import PropTypes from 'prop-types'

if (process.env.NODE_ENV !== 'production') {
  whyDidYouRender(React)
}

const TableRowProduct = ({
  isSelected,
  handleSelectItem,
  name,
  categories,
  featuredImageId,
  images,
  priceTaxIncl,
  quantity,
  active,
  id,
  handleClickRowItem,
}) => (
  <TableRow
    className="h-64 cursor-pointer"
    hover
    role="checkbox"
    aria-checked={isSelected}
    tabIndex={-1}
    key={id}
    // selected={isSelected}
    onClick={() => handleClickRowItem(id)}
  >
    <TableCell className="w-48 pl-4 sm:pl-12" padding="checkbox">
      <Checkbox
        checked={isSelected}
        onClick={event => event.stopPropagation()}
        onChange={() => handleSelectItem(id)}
      />
    </TableCell>

    <TableCell className="w-52" component="th" scope="row" padding="none">
      {images && images.length > 0 ? (
        <img
          className="w-full block rounded"
          src={_.find(images, { id: featuredImageId }).url}
          alt={name}
        />
      ) : (
        <img
          className="w-full block rounded"
          src="assets/images/ecommerce/image-placeholder.png"
          alt={name}
        />
      )}
    </TableCell>

    <TableCell component="th" scope="row">
      {name}
    </TableCell>

    <TableCell className="truncate" component="th" scope="row">
      {categories.join(', ')}
    </TableCell>

    <TableCell component="th" scope="row" align="right">
      <span>$</span>
      {priceTaxIncl}
    </TableCell>

    <TableCell component="th" scope="row" align="right">
      {quantity}
      <i
        className={classNames(
          'inline-block w-8 h-8 rounded ml-8',
          quantity <= 5 && 'bg-red',
          quantity > 5 && quantity <= 25 && 'bg-orange',
          quantity > 25 && 'bg-green',
        )}
      />
    </TableCell>

    <TableCell component="th" scope="row" align="right">
      {active ? (
        <Icon className="text-green text-20">check_circle</Icon>
      ) : (
        <Icon className="text-red text-20">remove_circle</Icon>
      )}
    </TableCell>
  </TableRow>
)

TableRowProduct.whyDidYouRender = true

// const areEqual = (prevProps, nextProps) => prevProps.isSelected === nextProps.isSelected

TableRowProduct.propTypes = {
  isSelected: PropTypes.bool,
  handleSelectItem: PropTypes.func,
  name: PropTypes.string,
  categories: PropTypes.array,
  featuredImageId: PropTypes.number,
  images: PropTypes.array,
  priceTaxIncl: PropTypes.number,
  quantity: PropTypes.number,
  active: PropTypes.bool,
  id: PropTypes.string,
  handleClickRowItem: PropTypes.func,
}

TableRowProduct.defaultProps = {
  isSelected: false,
  handleSelectItem: () => {},
  name: '',
  categories: [],
  featuredImageId: 0,
  images: [],
  priceTaxIncl: 0,
  quantity: 0,
  active: false,
  id: '',
  handleClickRowItem: () => {},
}
export default memo(TableRowProduct)
