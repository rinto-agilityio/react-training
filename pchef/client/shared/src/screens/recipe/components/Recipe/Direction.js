// Libs
import React from 'react'
import { Text } from 'react-native'

// Styles
import styles from './styles'

// Themes
import { METRICS } from '../../../../themes'

// Components
import Button from '../../../../components/Button'
import Wrapper from '../../../../layout/Wrapper'

type Props = {
  item: {
    step: number,
    title: string
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
  <Wrapper
    direction="row"
    childPosition="middle"
    customStyles={{
      marginBottom: METRICS.largeMargin,
    }}
  >
    <Button
      title={item.step ? item.step.toString() : ''}
      buttonStyle={[styles.button, styles[`${size}Button`]]}
      titleStyle={[styles.titleBtn, styles[`${size}TitleBtn`]]}
      onPress={onSelectStep}
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
        {item.title}
      </Text>
    </Text>
  </Wrapper>
)

Direction.defaultProps = {
  customDescription: {},
  onSelectStep: () => {},
}

export default Direction
