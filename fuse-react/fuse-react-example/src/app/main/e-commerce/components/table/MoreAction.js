import React, { useState } from 'react'
import {
  IconButton,
  Icon,
  Menu,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import classNames from 'classnames'

const MoreAction = ({ classes }) => {
  const [selectedProductsMenu, setSelectedProductsMenu] = useState(null)

  const openSelectedProductsMenu = event => {
    setSelectedProductsMenu(event.currentTarget)
  }

  const closeSelectedProductsMenu = () => {
    setSelectedProductsMenu(null)
  }

  return (
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
              closeSelectedProductsMenu()
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
  )
}

export default MoreAction
