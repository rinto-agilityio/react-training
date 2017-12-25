// Libs
import { connect } from 'react-redux'

// Components
import ErrorComponent from '../components/ErrorComponent'

const mapDispatchToProps = {},
  mapStateToProps = state => ({
    error: state.error
  })

export default connect(mapStateToProps, mapDispatchToProps)(ErrorComponent)
