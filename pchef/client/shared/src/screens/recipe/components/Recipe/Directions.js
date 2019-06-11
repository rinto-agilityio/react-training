// Libs
import React from 'react'
import { Text, View } from 'react-native'

// Styles
import styles from './styles'

// Components
import Direction from './Direction'

type Props = {
  steps: Array<{
    step: number,
    title: string,
    id: string,
  }>,
  size: string,
  customDirections?: {},
  customTitle?: {},
  onSelectStep?: () => void,
}

const Directions = ({
  steps = [],
  size = 'medium',
  customDirections,
  customTitle,
  onSelectStep,
}: Props) => (
  <View
    style={[
      styles.directions,
      styles[`${size}Directions`],
      customDirections,
    ]}
  >
    <Text
      style={[
        styles.title,
        styles[`${size}Title`],
        customTitle,
      ]}
    >
      How to cook
    </Text>

    {steps.map(item => (
      <Direction
        item={item}
        size={size}
        onSelectStep={onSelectStep}
        key={item.step}
      />
    ))}
  </View>
)

Directions.defaultProps = {
  customDirections: {},
  customTitle: {},
  onSelectStep: () => {},
}

export default Directions
