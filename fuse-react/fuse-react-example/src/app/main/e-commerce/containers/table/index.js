import { connect } from 'react-redux'
import withReducer from 'app/store/withReducer'

import Table from '../../components/table'

import { Creators, eCommerceReducer } from '../../redux'

const mapStateToProps = ({ eCommerceApp }) => {
  return {
    productList: eCommerceApp.productList,
  }
}

const dispatchToProps = {
  getProductsProcessing: Creators.getProductsProcessing,
}

export default withReducer('eCommerceApp', eCommerceReducer)(
  connect(
    mapStateToProps,
    dispatchToProps
  )(Table)
)
