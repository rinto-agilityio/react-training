import { connect } from 'react-redux'
import withReducer from 'app/store/withReducer'

import Products from '../../components/product/Products'

import { eCommerceReducer } from '../../redux/reducers'
import { Creators } from '../../redux/actions'

const mapStateToProps = ({ eCommerceApp }) => ({
  productList: eCommerceApp.productList,
  searchText: eCommerceApp.searchText,
})

const dispatchToProps = {
  getProductsProcessing: Creators.getProductsProcessing,
  getValueSearch: Creators.getValueSearch,
}

export default withReducer('eCommerceApp', eCommerceReducer)(
  connect(
    mapStateToProps,
    dispatchToProps,
  )(Products),
)
