// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { memo } from 'react'
import { TextInput, View } from 'react-native'

// Styles
import styles from './styles'

// Themes
import { COLORS } from '../../themes'

type Props = {
  multiline?: boolean,
  autoCapitalize?: string,
  autoCorrect?: boolean,
  customStyle?: {} | Array<{}>,
  editable?: boolean,
  placeholder?: string,
  placeholderTextColor?: string,
  numberOfLines?: number,
  defaultValue?: string,
  refInput: {
    current: {
      _node: HTMLInputElement,
      _lastNativeText: string,
    } |
    null
  },
  onSubmitEditing?: () => void,
  secureTextEntry?: boolean,
  customContainer?: {} | Array<{}>,
}

const TextBox = ({
  multiline,
  autoCapitalize,
  autoCorrect,
  customStyle,
  editable,
  placeholder,
  placeholderTextColor,
  numberOfLines,
  defaultValue,
  refInput,
  onSubmitEditing,
  secureTextEntry,
  customContainer,
}: Props) => (
  <View style={[styles.container, customContainer]}>
    <TextInput
      multiline={multiline}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      defaultValue={defaultValue}
      placeholder={placeholder}
      editable={editable}
      numberOfLines={numberOfLines}
      style={[styles.default, customStyle]}
      ref={refInput}
      placeholderTextColor={placeholderTextColor}
      onSubmitEditing={onSubmitEditing}
      secureTextEntry={secureTextEntry}
    />
  </View>
)

TextBox.defaultProps = {
  multiline: false,
  autoCapitalize: 'none',
  autoCorrect: false,
  editable: true,
  numberOfLines: 1,
  placeholder: '',
  customStyle: {},
  placeholderTextColor: COLORS.black,
  onSubmitEditing: () => {},
  defaultValue: '',
  secureTextEntry: false,
  customContainer: {},
}

export default memo<Props>(TextBox)
