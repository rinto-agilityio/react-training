// Libs
import * as React from 'react'
import { View } from 'react-native'
import { Dialog } from 'react-native-paper'

// Styles
import styles from './styles'

// Components
import Button from '../Button'

type Props = {
  size: string,
  title?: string,
  dismissBtn?: boolean,
  children: React.Node,
  visible?: boolean,
  onDismiss?: () => void,
  onSubmit?: () => void,
}

const Modal = ({
  size = 'medium',
  title,
  dismissBtn,
  children,
  onSubmit,
  visible,
  onDismiss,
}: Props) => (
  <View style={styles.wrapper}>
    <Dialog
      visible={visible}
      onDismiss={onDismiss}
      style={[styles.dialog, styles[`${size}Dialog`]]}
    >
      {title ? (
        <Dialog.Title
          style={[styles.titleModal, styles[`${size}TitleModal`]]}
          accessibilityRole="heading"
        >
          {title}
        </Dialog.Title>
      ) : null }
      <Dialog.Content style={[styles.content, styles[`${size}Content`]]}>
        {children}
      </Dialog.Content>
      <Dialog.Actions>
        {dismissBtn && (
          <Button
            onPress={onDismiss}
            title="Cancel"
            buttonStyle={[styles.btnModal, styles[`${size}btnModal`]]}
          />
        )}
        <Button
          onPress={onSubmit}
          title="Done"
          buttonStyle={[styles.btnModal, styles[`${size}btnModal`]]}
        />
      </Dialog.Actions>
    </Dialog>
  </View>
)

Modal.defaultProps = {
  dismissBtn: false,
  title: '',
  visible: false,
  onSubmit: () => {},
  onDismiss: () => {},
}

export default Modal