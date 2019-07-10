// Libs
import React, { Component } from 'react'
import { Text } from 'react-native'
import { storiesOf } from '@storybook/react'

// Components
import Modal from '.'
import Button from '../Button'

// Helper
import { wInfo } from '../../../.storybook/utils';

type Props = {
  children?: React.Node,
  closeModal?: () => void,
}

const BaseModal = ({
  closeModal = () => { },
}: Props) => (
  <Modal
    onDismiss={closeModal}
    visible
    onSubmit={closeModal}
    title="Modal"
  >
    <Text>Modal content</Text>
  </Modal>
)

const ModalWithoutTitle = ({
  closeModal = () => { },
}: Prop) => (
  <Modal
    onDismiss={closeModal}
    visible
    onSubmit={closeModal}
  >
    <Text>Modal content</Text>
  </Modal>
)

const CustomModal = ({
  closeModal = () => { },
}: Props) => (
  <Modal
    onDismiss={closeModal}
    visible
    onSubmit={closeModal}
    dismissBtn
  >
    <Text>Modal content</Text>
  </Modal>
)

class StorybookModal extends Component<Props> {
  state = {
    openModal: false,
  }

  openModal = () => {
    this.setState({ openModal: true })
  }

  closeModal = () => {
    this.setState({ openModal: false })
  }

  render() {
    const { children } = this.props
    const { openModal } = this.state
    return (
      <>
        <Button
          title="Click me"
          onPress={this.openModal}
          buttonStyle={{
            width: 100,
          }}
        />
        {
          openModal &&
          React.cloneElement(children, {
            closeModal: this.closeModal,
          }) }
      </>
    )
  }
}

storiesOf('Modal', module)
  .addDecorator(wInfo())
  .add('Have title', () => (
    <StorybookModal>
      <BaseModal />
    </StorybookModal>
  ))
  .add('No title', () => (
    <StorybookModal>
      <ModalWithoutTitle />
    </StorybookModal>
  ))
  .add('Have dismiss button', () => (
    <StorybookModal>
      <CustomModal />
    </StorybookModal>
  ))
