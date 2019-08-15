import React from 'react'
import { FuseAnimate } from '@fuse'
import {
  Paper,
  Button,
  Input,
  Icon,
  Typography,
  MuiThemeProvider,
} from '@material-ui/core'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductListHeader = ({ mainTheme, searchText, handleSearch }) => {
  return (
    <div className="flex flex-1 w-full items-center justify-between">
      <div className="flex items-center">
        <FuseAnimate animation="transition.expandIn" delay={300}>
          <Icon className="text-32 mr-0 sm:mr-12">shopping_basket</Icon>
        </FuseAnimate>
        <FuseAnimate animation="transition.slideLeftIn" delay={300}>
          <Typography className="hidden sm:flex" variant="h6">
            Products
          </Typography>
        </FuseAnimate>
      </div>

      <div className="flex flex-1 items-center justify-center px-12">
        <MuiThemeProvider theme={mainTheme}>
          <FuseAnimate animation="transition.slideDownIn" delay={300}>
            <Paper
              className="flex items-center w-full max-w-512 px-8 py-4 rounded-8"
              elevation={1}
            >
              <Icon className="mr-8" color="action">
                search
              </Icon>

              <Input
                placeholder="Search"
                className="flex flex-1"
                disableUnderline
                fullWidth
                value={searchText}
                inputProps={{
                  'aria-label': 'Search',
                }}
                onChange={handleSearch}
              />
            </Paper>
          </FuseAnimate>
        </MuiThemeProvider>
      </div>
      <FuseAnimate animation="transition.slideRightIn" delay={300}>
        <Button
          component={Link}
          to="/e-commerce/products/new"
          className="whitespace-no-wrap"
          variant="contained"
        >
          <span className="hidden sm:flex">Add New Product</span>
          <span className="flex sm:hidden">New</span>
        </Button>
      </FuseAnimate>
    </div>
  )
}

function mapStateToProps({ eCommerceApp, fuse }) {
  return {
    searchText: eCommerceApp.searchText,
    mainTheme: fuse.settings.mainTheme,
  }
}

export default connect(
  mapStateToProps,
  null
)(ProductListHeader)
