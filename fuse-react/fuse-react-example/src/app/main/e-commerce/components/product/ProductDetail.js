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
import InventoryTab from '../ProductDetailTabs/InventoryTab'

import { FuseUtils } from '@fuse'

const styles = theme => ({
  input: {
    display: 'none',
  },
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
  classes,
  addNewProduct,
  history,
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

  const handleImageChange = e => {
    const url =
      e.target.files[0] &&
      (window.URL || window.webkitURL).createObjectURL(e.target.files[0])
    const imageItem = {
      id: Math.floor(Math.random() * 10),
      url,
      type: 'image',
    }
    setForm({
      ...form,
      images: form.images.concat(imageItem),
      featuredImageId: imageItem.id,
    })
  }

  const handleChipChange = (value, name) => (
    setForm({
      ...form,
      [name]: value.map(item => item.value),
    })
  )

  const submitSaveProduct = () => {
    if (form.id) {
      updateProduct(form)
    } else {
      addNewProduct({ ...form, id: FuseUtils.generateGUID() })
      history.push('/e-commerce/products')
    }
  }

  const setFeaturedImage = id => (
    setForm({
      ...form,
      featuredImageId: id,
    })
  )

  const canBeSubmitted = () => _.isEqual(productEditing, form)


  const renderContentTab = () => {
    switch (tabValue) {
      case 1:
        return (
          <ImageTab
            form={form}
            setFeaturedImage={setFeaturedImage}
            classes={classes}
            handleChange={handleImageChange}
          />
        )
      case 2:
        return <PricingTab form={form} handleChange={handleChange} />
      case 3:
        return <InventoryTab form={form} handleChange={handleChange} />
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
      header={(
        <ProductItemHeader
          form={form}
          handleChange={handleChange}
          canBeSubmitted={canBeSubmitted}
          submitSaveProduct={submitSaveProduct}
        />
      )}
      contentToolbar={
        <ProductTabs handleChangeTab={handleChangeTab} tabValue={tabValue} />
      }
      content={renderContentTab()}
    />
  )
}

ProductDetail.propTypes = {
  productEditing: PropTypes.shape({
    tags: PropTypes.array,
    categories: PropTypes.array,
    description: PropTypes.string,
    name: PropTypes.string,
    images: PropTypes.array,
    sku: PropTypes.string,
    quantity: PropTypes.number,
  }),
  match: PropTypes.object,
  getProductDetail: PropTypes.func,
  updateProduct: PropTypes.func,
  addNewProduct: PropTypes.func,
  classes: PropTypes.object,
  history: PropTypes.object,
}

ProductDetail.defaultProps = {
  productEditing: {
    tags: '',
    categories: [],
    description: [],
    images: [],
    name: '',
    handle: '',
    featuredImageId: 1,
    active: false,
    sku: '',
    quantity: 0,
  },
  match: {},
  getProductDetail: () => {},
  updateProduct: () => {},
  addNewProduct: () => {},
  classes: {},
  history: {},
}
export default withStyles(styles, { withTheme: true })(ProductDetail)
