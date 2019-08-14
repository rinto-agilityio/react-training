import React from 'react'
import { Tab, Tabs } from '@material-ui/core'
import PropTypes from 'prop-types'

const tabItems = ['Basic Info', 'Product Images', 'Pricing']

const ProductTabs = ({ tabValue, handleChangeTab }) => (
  <Tabs
    value={tabValue}
    onChange={handleChangeTab}
    indicatorColor="secondary"
    textColor="secondary"
    variant="scrollable"
    scrollButtons="auto"
    classes={{ root: 'w-full h-64' }}
  >
    {tabItems.map((item, index) => (
      <Tab className="h-64 normal-case" label={item} key={index} />
    ))}
  </Tabs>
)

PropTypes.ProductTabs = {
  tabValue: PropTypes.number,
  handleChangeTab: PropTypes.func,
}

ProductTabs.defaultProps = {
  handleChangeTab: () => {},
  tabValue: 0,
}

export default ProductTabs
