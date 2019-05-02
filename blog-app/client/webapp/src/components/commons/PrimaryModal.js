import React, { memo } from 'react'
import PropTypes from 'prop-types'
import {
  Modal
} from 'react-bootstrap'

const PrimaryModal = (props) => {
  const { confirmPayment, modalClass, show, onClose, onClosed, dialogClassName, title, children } = props
  return (
    <Modal
      bsSize={confirmPayment ? '' : 'large'}
      className={`primaryModal ${modalClass}`}
      show={show}
      onHide={onClose}
      onExited={onClosed}
      dialogClassName={dialogClassName}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <div>
        {children}
      </div>
    </Modal>
  )
}

// Define propTypes
PrimaryModal.propTypes = {
  disabled: PropTypes.bool,
  show: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  dialogClassName: PropTypes.string,
}

// Set default props
PrimaryModal.defaultProps = {
  disabled: false,
  show: false,
  onClose: function(){},
  title: '',
  dialogClassName: '',
}

export default memo(PrimaryModal)
