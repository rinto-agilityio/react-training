// libs
import React from 'react';
import { View, Text } from 'react-native';
import { Icon as IconComponent } from 'react-native-elements'

// Styles
import styles from './styles';

// Themes
import { COLORS, METRICS } from '../../themes';

type Props = {
  label?: string,
  onClick?: () => void,
  customStyle?: {},
  color?: string,
  type?: string,
  size?: number,
  name: string
};

const Icon = ({
  label,
  onClick,
  customStyle,
  color,
  type,
  size,
  name
}: Props) => (
  <View style={styles.wrapIcon}>
    <IconComponent
      name={name}
      type={type}
      color={color}
      size={size}
      onPress={onClick}
    />
    {label ? <Text style={[customStyle, styles.label]}>{label}</Text> : null}
  </View>
);

export default Icon;

Icon.defaultProps = {
  label: '',
  type: 'font-awesome',
  onClick: () => {},
  customStyle: {},
  size: METRICS.fontSize.medium,
  color: COLORS.black
};
