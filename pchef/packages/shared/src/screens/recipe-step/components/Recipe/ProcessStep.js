// Libs
import React from 'react'

// Styles
import styles from './styles'

// Themes
import { COLORS, METRICS } from '../../../../themes'

// Components
import Button from '../../../../components/Button'
import Wrapper from '../../../../layout/Wrapper'
import Icon from '../../../../components/Icon'

type Props = {
  steps: Array<{
    step: number
  }>,
  size: string,
  step: number,
  onClickStep?: () => void,
  onClickSelectStep?: () => void,
  customStepBtn?: {},
}

const Progress = ({
  steps = [],
  size = 'large',
  step,
  onClickStep,
  customStepBtn,
  onClickSelectStep,
}: Props) => {
  // Disabled next icon if current step is last step
  const disabledNextIcon = steps.length === step
  // Disabled prev icon if current satep is first step
  const disablePrevIcon = step === 1

  return (
    <Wrapper direction="row">
      <Icon
        name="chevron-left"
        size={METRICS.fontSize[`${size}`]}
        color={disablePrevIcon ? COLORS.baseGray : COLORS.baseBlue}
        onClick={onClickSelectStep}
        underlayColor="transparent"
        disabled={disablePrevIcon}
        disabledStyle={{
          backgroundColor: 'transparent',
        }}
      />
      <Wrapper direction="row">
        {steps.map(item => {
          const status = step === item.step ? 'active' : 'inactive'

          return (
            <Button
              key={item.step}
              onClick={onClickStep}
              buttonStyle={[
                styles.progressStep,
                styles[`${status}Step`],
                styles[`${size}Step`],
                customStepBtn,
              ]}
              typeName="solid"
              title=""
            />
          )
        })}
      </Wrapper>
      <Icon
        name="chevron-right"
        size={METRICS.fontSize[`${size}`]}
        color={disabledNextIcon ? COLORS.baseGray : COLORS.baseBlue}
        onClick={onClickSelectStep}
        underlayColor="transparent"
        disabled={disabledNextIcon}
        disabledStyle={{
          backgroundColor: 'transparent',
        }}
      />
    </Wrapper>
  )
}

Progress.defaultProps = {
  onClickStep: () => {},
  customStepBtn: {},
  onClickSelectStep: () => {},
}

export default Progress
