import React from 'react'
import classNames from 'classnames'
import { Icon, Button } from '@material-ui/core'
import PropTypes from 'prop-types'

const ImageTab = ({ form, setFeaturedImage, classes, handleChange }) => (
  <>
    <div className="flex justify-center w-full mt-20 mb-20">
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        name="images"
        onChange={handleChange}
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Upload Images
        </Button>
      </label>
    </div>
    <div className="flex justify-center sm:justify-start flex-wrap">
      {form.images &&
        form.images.map(media => (
          <div
            onClick={() => setFeaturedImage(media.id)}
            className={classNames(
              classes.productImageItem,
              'flex items-center justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer',
              media.id === form.featuredImageId && 'featured'
            )}
            key={media.id}
          >
            <Icon className={classes.productImageFeaturedStar}>star</Icon>
            <img
              className="max-w-none w-auto h-full"
              src={media.url}
              alt="product"
            />
          </div>
        ))}
    </div>
  </>
)

ImageTab.propTypes = {
  form: PropTypes.shape({
    images: PropTypes.array,
  }),
  setFeaturedImage: PropTypes.func,
  classes: PropTypes.object,
  handleChange: PropTypes.func,
}

ImageTab.defaultProps = {
  form: {
    images: [],
  },
  setFeaturedImage: () => {},
  classes: {},
  handleChange: () => {},
}

export default ImageTab
