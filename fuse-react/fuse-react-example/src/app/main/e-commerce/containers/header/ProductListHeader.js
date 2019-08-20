import { connect } from 'react-redux'
import withReducer from 'app/store/withReducer'

import ProductListHeader from '../../components/headers/ProductListHeader'

import { eCommerceReducer } from '../../redux/reducers'

const mapStateToProps = ({ eCommerceApp, fuse }) => ({
  mainTheme: fuse.settings.mainTheme,
  searchText: eCommerceApp.searchText,
})

export default withReducer('eCommerceApp', eCommerceReducer)(
  connect(
    mapStateToProps,
    null,
  )(ProductListHeader),
)
