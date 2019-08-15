import React from 'react'
import {
  TextField,
} from "@material-ui/core"
import PropTypes from 'prop-types'

const InventoryTab = ({ handleChange, form }) => (
  <div>
    <TextField
      className="mt-8 mb-16"
      required
      label="SKU"
      autoFocus
      id="sku"
      name="sku"
      value={form.sku}
      onChange={handleChange}
      variant="outlined"
      fullWidth
    />

    <TextField
      className="mt-8 mb-16"
      label="Quantity"
      id="quantity"
      name="quantity"
      value={form.quantity}
      onChange={handleChange}
      variant="outlined"
      type="number"
      fullWidth
    />
  </div>
)

PropTypes.InventoryTab = {
  form: PropTypes.shape({
    sku: PropTypes.string,
    quantity: PropTypes.number
  }),
  handleChange: PropTypes.func,
}

InventoryTab.defaultProps = {
  form: {
    sku: '',
    quantity: 0
  },
  handleChange: () => {}
}

export default InventoryTab
