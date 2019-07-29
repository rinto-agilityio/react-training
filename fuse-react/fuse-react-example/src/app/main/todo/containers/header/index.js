import { connect } from 'react-redux'

import Header from '../../components/header'

const mapStateToProps = ({ todoApp, fuse }) => {
  return {
    mainTheme: fuse.settings.mainTheme,
  }
}

// const dispatchToProps = {
//   openModal: Creators.openModal,
// }

export default connect(
  mapStateToProps,
  null
)(Header)
