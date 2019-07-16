// Libs
import React from 'react'
import { Chip } from 'react-native-paper';

// Styles
import styles from './styles'

type Props = {
  mode: string,
  customTextStyle?: {} | Array<{}>,
  customStyle?: {} | Array<{}>,
  children: string,
  onClose: () => void,
  disabled: boolean,
}

const Tag = ({
  children,
  customStyle,
  customTextStyle,
  mode,
  onClose,
  disabled,
}: Props) => (
  <Chip
    style={[styles.tagStyles, customStyle]}
    textStyle={customTextStyle}
    mode={mode}
    onClose={onClose}
    disabled={disabled}
  >
    { children }
  </Chip>
)

Tag.defaultProps = {
  customStyle: {},
  customTextStyle: {},
}

export default Tag
