// Libs
import React from 'react'
import { TextInput, View } from 'react-native'

// Styles
import { styles } from './styles'

// Themes
import { COLORS } from '../../themes'

type Props = {
  multiline?: boolean,
  autoCapitalize?: string,
  autoCorrect?: boolean,
  customStyle?: {},
  editable?: boolean,
  placeholder?: string,
  placeholderTextColor?: string,
  numberOfLines?: number,
  defaultValue?: string,
  refInput: { current: HTMLInputElement | null },
  onSubmitEditing?: () => void,
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
}: Props) => (
  <View style={styles.container}>
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
}

export default TextBox
