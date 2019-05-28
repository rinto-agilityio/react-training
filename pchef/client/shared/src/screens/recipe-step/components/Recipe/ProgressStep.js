// Libs
import React from 'react'

// Styles
import styles from './styles'

// Themes
import { COLORS, FONTS } from '../../../../themes'

// Components
import Button from '../../../../components/Button'
import Wrapper from '../../../../layout/Wrapper'
import Icon from '../../../../components/Icon'

type Props = {
  steps: Array<{
    description: string,
    imgUrl: string,
    step: number,
    title: string,
  }>,
  size: string,
  step: number,
  onPressStep?: (step: number) => void,
  onPressSelectStep?: (name: string) => void,
  customStepBtn?: {},
}

const chevronIcon = (name, size, disabled, onPress) => (
  <Icon
    name={name}
    size={FONTS.fontSize[`${size}`]}
    color={disabled ? COLORS.baseGray : COLORS.baseBlue}
    onPress={onPress}
    disabled={disabled}
    customIconStyles={{
      margin: 0,
    }}
  />
)

const Progress = ({
  steps = [],
  size = 'large',
  step,
  onPressStep = () => {},
  customStepBtn = {},
  onPressSelectStep = () => {},
}: Props) => {
  // Disabled prev/next icon if current step is first/last step
  const disablePrevIcon = step === 1
  const disabledNextIcon = steps.length === step

  return (
    <Wrapper direction="row">
      {chevronIcon('chevron-left', size, disablePrevIcon, () => onPressSelectStep('prev'))}
      <Wrapper direction="row">
        {steps.map(item => {
          const status = step === item.step ? 'active' : 'inactive'

          return (
            <Button
              key={item.step}
              onPress={() => onPressStep(item.step)}
              buttonStyle={[
                styles.progressStep,
                styles[`${status}Step`],
                customStepBtn,
              ]}
              contentStyle={styles[`${size}Step`]}
              title=""
            />
          )
        })}
      </Wrapper>
      {chevronIcon('chevron-right', size, disabledNextIcon, () => onPressSelectStep('next'))}
    </Wrapper>
  )
}

Progress.defaultProps = {
  onPressStep: () => {},
  customStepBtn: {},
  onPressSelectStep: () => {},
}

export default Progress
