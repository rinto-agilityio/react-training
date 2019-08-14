import React from 'react'
import classNames from "classnames";
import {
  Icon,
} from "@material-ui/core"
import PropTypes from 'prop-types'

const ImageTab = ({ form, setFeaturedImage, classes }) => (
  <div>
    <div className="flex justify-center sm:justify-start flex-wrap">
      {form.images.map(media => (
        <div
          onClick={() => setFeaturedImage(media.id)}
          className={classNames(
            classes.productImageItem,
            "flex items-center justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer",
            media.id === form.featuredImageId && "featured"
          )}
          key={media.id}
        >
          <Icon className={classes.productImageFeaturedStar}>
            star
          </Icon>
          <img
            className="max-w-none w-auto h-full"
            src={media.url}
            alt="product"
          />
        </div>
      ))}
    </div>
  </div>
)

PropTypes.ImageTab = {
  form: PropTypes.shape({
    images: PropTypes.array,
  }),
  setFeaturedImage: PropTypes.func,
}

ImageTab.defaultProps = {
  form: {
    images: [],
  },
  images: () => {},
}

export default ImageTab
