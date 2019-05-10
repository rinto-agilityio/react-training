// Libs
import React from 'react'
import { Text, View } from 'react-native'

// Styles
import styles from './styles'

// Components
import Button from '../../../../components/Button'
import Wrapper from '../../../../layout/Wrapper';

type Props = {
  steps: Array<{
    step: number,
    description: string
  }>,
  size: string,
  customDirections?: {},
  customTitle?: {},
  customDescription?: {},
  onSelectStep?: () => void,
}

const Directions = ({
  steps = [],
  size = 'medium',
  customDirections,
  customTitle,
  customDescription,
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

    {steps.map(({ step, description }) => (
      <Wrapper direction="row" key={step} childPosition="middle">
        <Button
          title={step.toString()}
          type="Solid Button"
          buttonStyle={[styles.button, styles[`${size}Button`]]}
          titleStyle={[styles.titleBtn, styles[`${size}TitleBtn`]]}
          onClick={onSelectStep}
        />
        <Text style={styles.wrapperDescriptions}>
          <Text
            style={[
              styles.descriptionDirections,
              styles[`${size}Description`],
              customDescription,
            ]}
            onPress={onSelectStep}
          >
            {description}
          </Text>
        </Text>
      </Wrapper>
    ))}
  </View>
)

Directions.defaultProps = {
  customDirections: {},
  customTitle: {},
  customDescription: {},
  onSelectStep: () => {},
}

export default Directions
