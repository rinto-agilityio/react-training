import React from 'react'
import { TextField } from '@material-ui/core'
import { FuseChipSelect } from '@fuse'
import PropTypes from 'prop-types'

const BasicInfoTab = ({ handleChange, form, handleChipChange }) => (
  <div>
    <TextField
      className="mt-8 mb-16"
      error={form.name === ''}
      required
      label="Name"
      autoFocus
      id="name"
      name="name"
      value={form.name}
      onChange={handleChange}
      variant="outlined"
      fullWidth
    />

    <TextField
      className="mt-8 mb-16"
      id="description"
      name="description"
      onChange={handleChange}
      label="Description"
      type="text"
      value={form.description}
      multiline
      rows={5}
      variant="outlined"
      fullWidth
    />

    <FuseChipSelect
      className="mt-8 mb-24"
      value={
        form.categories &&
        form.categories.map(item => ({
          value: item,
          label: item,
        }))
      }
      onChange={value => handleChipChange(value, 'categories')}
      placeholder="Select multiple categories"
      textFieldProps={{
        label: 'Categories',
        InputLabelProps: {
          shrink: true,
        },
        variant: 'outlined',
      }}
      isMulti
    />

    <FuseChipSelect
      className="mt-8 mb-16"
      value={
        form.tags &&
        form.tags.map(item => ({
          value: item,
          label: item,
        }))
      }
      onChange={value => handleChipChange(value, 'tags')}
      placeholder="Select multiple tags"
      textFieldProps={{
        label: 'Tags',
        InputLabelProps: {
          shrink: true,
        },
        variant: 'outlined',
      }}
      isMulti
    />
  </div>
)

PropTypes.BasicInfoTab = {
  form: PropTypes.shape({
    tags: PropTypes.array,
    categories: PropTypes.array,
    description: PropTypes.string,
    name: PropTypes.string,
  }),
  handleChange: PropTypes.func,
}

BasicInfoTab.defaultProps = {
  form: {
    tags: '',
    categories: [],
    description: [],
    name: '',
  },
  match: {},
  handleChange: () => {},
}

export default BasicInfoTab
