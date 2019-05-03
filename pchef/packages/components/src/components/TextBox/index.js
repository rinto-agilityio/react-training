/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// Libs
import React from 'react';
import { TextInput, View } from 'react-native';

// Styles
import { styles } from './styles';

// Themes
import { COLORS } from '../../themes';

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
  onSubmitEditing
}) => (
    <View style={styles.container}>
      <TextInput
        multiline={multiline}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        defaultValue={defaultValue}
        placeholder={placeholder}
        multiline={multiline}
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
  placeholderTextColor: COLORS.black
}

export default TextBox