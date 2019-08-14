import React from 'react'
import {
  TextField,
  InputAdornment,
} from "@material-ui/core"
import PropTypes from 'prop-types'

const PricingTab = ({ handleChange, form }) => (
  <div>
    <TextField
      className="mt-8 mb-16"
      label="Tax Excluded Price"
      id="priceTaxExcl"
      name="priceTaxExcl"
      value={form.priceTaxExcl}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">$</InputAdornment>
        )
      }}
      type="number"
      variant="outlined"
      autoFocus
      fullWidth
    />

    <TextField
      className="mt-8 mb-16"
      label="Tax Included Price"
      id="priceTaxIncl"
      name="priceTaxIncl"
      value={form.priceTaxIncl}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">$</InputAdornment>
        )
      }}
      type="number"
      variant="outlined"
      fullWidth
    />

    <TextField
      className="mt-8 mb-16"
      label="Tax Rate"
      id="taxRate"
      name="taxRate"
      value={form.taxRate}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">$</InputAdornment>
        )
      }}
      type="number"
      variant="outlined"
      fullWidth
    />

    <TextField
      className="mt-8 mb-16"
      label="Compared Price"
      id="comparedPrice"
      name="comparedPrice"
      value={form.comparedPrice}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">$</InputAdornment>
        )
      }}
      type="number"
      variant="outlined"
      fullWidth
      helperText="Add a compare price to show next to the real price"
    />
  </div>
)

PropTypes.PricingTab = {
  form: PropTypes.shape({
    comparedPrice: PropTypes.number,
    taxRate: PropTypes.number,
    priceTaxIncl: PropTypes.number,
    priceTaxExcl: PropTypes.number
  }),
  handleChange: PropTypes.func,
}

PricingTab.defaultProps = {
  form: {
    comparedPrice: 0,
    taxRate: 0,
    priceTaxIncl: 0,
    priceTaxExcl: 0
  },
  handleChange: () => {},
}

export default PricingTab
