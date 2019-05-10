// Libs
import React from 'react'
import { Text, View } from 'react-native'

// Styles
import styles from './styles'

// Themes
import { COLORS, METRICS } from '../../../../themes'

// Components
import Button from '../../../../components/Button'
import Wrapper from '../../../../layout/Wrapper'
import Icon from '../../../../components/Icon'

type Props = {
  steps: Array<number>,
  size: string,
  onClickStep?: () => void,
  onClickNextStep?: () => void,
  customStepBtn?: {},
}

const Progress = ({
  steps = [],
  size = 'large',
  onClickStep,
  customStepBtn,
  onClickNextStep,
}: Props) => (
  <Wrapper direction="row">
    <Wrapper direction="row">
      {steps.map(item => (
        <Button
          key={item.step}
          onClick={onClickStep}
          buttonStyle={[
            styles.progressStep,
            styles[`${size}Step`],
            customStepBtn,
          ]}
          typeName="Solid Button"
        />
      ))}
    </Wrapper>
    <Icon
      name="chevron-right"
      size={METRICS.fontSize[`${size}`]}
      color={COLORS.baseBlue}
      onClick={onClickNextStep}
      underlayColor="transparents"
    />
  </Wrapper>
)

Progress.defaultProps = {
  onClickStep: () => {},
  customStepBtn: {},
  onClickNextStep: () => {},
}

export default Progress
