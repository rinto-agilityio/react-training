// Libs
import React from 'react'
import { Text } from 'react-native'

// Styles
import styles from './styles'

// Components
import Button from '../../../../components/Button'
import Wrapper from '../../../../layout/Wrapper'

type Props = {
  item: {
    step: number,
    description: string
  },
  size: string,
  customDescription?: {},
  onSelectStep?: () => void,
}

const Direction = ({
  item = {},
  size = 'medium',
  customDescription,
  onSelectStep,
}: Props) => (
  <Wrapper direction="row" childPosition="middle">
    <Button
      title={item.step.toString()}
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
        {item.description}
      </Text>
    </Text>
  </Wrapper>
)

Direction.defaultProps = {
  customDescription: {},
  onSelectStep: () => {},
}

export default Direction
