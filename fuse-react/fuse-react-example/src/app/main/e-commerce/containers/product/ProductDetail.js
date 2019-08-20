import { connect } from 'react-redux'
import withReducer from 'app/store/withReducer'

import ProductDetail from '../../components/product/ProductDetail'

import { Creators } from '../../redux/actions'
import { eCommerceReducer } from '../../redux/reducers'

const mapStateToProps = ({ eCommerceApp }) => ({
  productEditing: eCommerceApp.productEditing,
})

const dispatchToProps = {
  getProductDetail: Creators.getProductDetailProcessing,
  updateProduct: Creators.updateProductProcessing,
  addNewProduct: Creators.addNewProductProcessing,
}

export default withReducer('eCommerceApp', eCommerceReducer)(
  connect(
    mapStateToProps,
    dispatchToProps,
  )(ProductDetail),
)
