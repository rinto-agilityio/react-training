import { connect } from 'react-redux'
import withReducer from 'app/store/withReducer'

import Table from '../../components/table'

import { Creators, eCommerceReducer } from '../../redux'

const mapStateToProps = ({ eCommerceApp }) => ({
  productList: eCommerceApp.productList,
  searchText: eCommerceApp.searchText,
})

const dispatchToProps = {
  getProductsProcessing: Creators.getProductsProcessing,
  deleteProduct: Creators.deleteProductProcessing,
}

export default withReducer('eCommerceApp', eCommerceReducer)(
  connect(
    mapStateToProps,
    dispatchToProps,
  )(Table),
)
