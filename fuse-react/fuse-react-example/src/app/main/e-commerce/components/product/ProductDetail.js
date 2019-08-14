import React, { useEffect, useState } from 'react'
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { FusePageCarded } from '@fuse'
import { orange } from '@material-ui/core/colors'
import ProductItemHeader from '../headers/ProductItemHeader'
import ProductTabs from '../ProductDetailTabs/ProductTabs'
import BasicInfoTab from '../ProductDetailTabs/BasicInfoTab'
import ImageTab from '../ProductDetailTabs/ImageTab'
import PricingTab from '../ProductDetailTabs/PricingTab'

const styles = theme => ({
  productImageFeaturedStar: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: orange[400],
    opacity: 0,
  },
  productImageItem: {
    transitionProperty: 'box-shadow',
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut,
    '&:hover': {
      boxShadow: theme.shadows[5],
      '& $productImageFeaturedStar': {
        opacity: 0.8,
      },
    },
    '&.featured': {
      pointerEvents: 'none',
      boxShadow: theme.shadows[3],
      '& $productImageFeaturedStar': {
        opacity: 1,
      },
      '&:hover $productImageFeaturedStar': {
        opacity: 1,
      },
    },
  },
})

const ProductDetail = ({
  productEditing,
  match,
  getProductDetail,
  updateProduct,
  classes
}) => {
  const [tabValue, setTabValue] = useState(0)
  const [form, setForm] = useState()

  useEffect(() => {
    getProductDetail(match.params.productId)
  }, [match.params.productId])

  useEffect(() => {
    setForm(productEditing)
  }, [productEditing])

  const handleChangeTab = (event, value) => setTabValue(value)

  const handleChange = event => {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleChipChange = (value, name) =>
    setForm({
      ...form,
      [name]: value.map(item => item.value),
    })

  const submitSaveProduct = () => {
    updateProduct(form)
  }

  const setFeaturedImage = id => setForm({
    ...form,
    'featuredImageId': id
  })

  const canBeSubmitted = () => {
    return _.isEqual(productEditing, form)
  }

  const renderContentTab = () => {
    switch(tabValue) {
      case 1:
        return (
          <ImageTab
            form={form}
            setFeaturedImage={setFeaturedImage}
            classes={classes}
          />
        )
      case 2:
        return (
          <PricingTab
            form={form}
            handleChange={handleChange}
          />
        )
      default:
        return (
          <BasicInfoTab
            form={form}
            handleChange={handleChange}
            handleChipChange={handleChipChange}
          />
        )
    }
  }

  return (
    <FusePageCarded
      classes={{
        toolbar: 'p-0',
        header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
      }}
      header={
        <ProductItemHeader
          form={form}
          handleChange={handleChange}
          canBeSubmitted={canBeSubmitted}
          submitSaveProduct={submitSaveProduct}
        />
      }
      contentToolbar={
        <ProductTabs handleChangeTab={handleChangeTab} tabValue={tabValue} />
      }
      content={renderContentTab()}
    />
  )
}

PropTypes.ProductDetail = {
  productEditing: PropTypes.shape({
    tags: PropTypes.array,
    categories: PropTypes.array,
    description: PropTypes.string,
    name: PropTypes.string,
  }),
  match: PropTypes.object,
  getProductDetail: PropTypes.func,
}

ProductDetail.defaultProps = {
  productEditing: {
    tags: '',
    categories: [],
    description: [],
    name: '',
    handle: '',
    featuredImageId: 1,
    active: false,
  },
  match: {},
  getProductDetail: () => {},
}
export default withStyles(styles, { withTheme: true })(ProductDetail)
