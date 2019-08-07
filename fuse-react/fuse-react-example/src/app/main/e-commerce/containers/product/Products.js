import { connect } from 'react-redux'
import withReducer from 'app/store/withReducer'

import Products from '../../components/product/Products'

import { Creators, eCommerceReducer } from '../../redux'

const mapStateToProps = ({ eCommerceApp }) => {
  console.log('eCommerceApp', eCommerceApp)

  return {
    pipelines: null,
  }
}

const dispatchToProps = {
  getProductsProcessing: Creators.getProductsProcessing,
}

export default withReducer('eCommerceApp', eCommerceReducer)(
  connect(
    mapStateToProps,
    dispatchToProps
  )(Products)
)
