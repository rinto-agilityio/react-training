import React from 'react'
import { Button, Icon, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import _ from '@lodash'
import PropTypes from 'prop-types'
import { FuseAnimate } from '@fuse'

const ProductItemHeader = ({ form, canBeSubmitted }) => {
  return (
    <div className="flex flex-1 w-full items-center justify-between">
      <div className="flex flex-col items-start max-w-full">
        <FuseAnimate animation="transition.slideRightIn" delay={300}>
          <Typography
            className="normal-case flex items-center sm:mb-12"
            component={Link}
            role="button"
            to="/e-commerce/products"
          >
            <Icon className="mr-4 text-20">arrow_back</Icon>
            Products
          </Typography>
        </FuseAnimate>

        <div className="flex items-center max-w-full">
          <FuseAnimate animation="transition.expandIn" delay={300}>
            {form && form.images && form.images.length ? (
              <img
                className="w-32 sm:w-48 mr-8 sm:mr-16 rounded"
                src={_.find(form.images, { id: form.featuredImageId }).url}
                alt={form.name}
              />
            ) : (
              <img
                className="w-32 sm:w-48 mr-8 sm:mr-16 rounded"
                src="assets/images/ecommerce/product-image-placeholder.png"
                alt={form.name}
              />
            )}
          </FuseAnimate>
          <div className="flex flex-col min-w-0">
            <FuseAnimate animation="transition.slideLeftIn" delay={300}>
              <Typography className="text-16 sm:text-20 truncate">
                {form.name ? form.name : 'New Product'}
              </Typography>
            </FuseAnimate>
            <FuseAnimate animation="transition.slideLeftIn" delay={300}>
              <Typography variant="caption">Product Detail</Typography>
            </FuseAnimate>
          </div>
        </div>
      </div>
      <FuseAnimate animation="transition.slideRightIn" delay={300}>
        <Button
          className="whitespace-no-wrap"
          variant="contained"
          disabled={canBeSubmitted()}
          // onClick={() => saveProduct(form)}
        >
          Save
        </Button>
      </FuseAnimate>
    </div>
  )
}

PropTypes.ProductItemHeader = {
  form: PropTypes.shape({
    categories: PropTypes.array,
    name: PropTypes.string,
  }),
  handleChange: PropTypes.func,
}

ProductItemHeader.defaultProps = {
  form: {
    categories: [],
    name: '',
  },
}

export default ProductItemHeader
