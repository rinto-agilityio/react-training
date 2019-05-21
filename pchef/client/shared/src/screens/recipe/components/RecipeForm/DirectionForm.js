// Libs
import React, { useRef } from 'react'

// Styles
import styles from './styles'

// Themes
import { COLORS, METRICS } from '../../../../themes'

// Components
import Modal from '../../../../components/Modal'
import Wrapper from '../../../../layout/Wrapper'
import Button from '../../../../components/Button'
import TextBox from '../../../../components/TextBox'
import Icon from '../../../../components/Icon'

type Props = {
  size: string,
  step: string,
  visible?: boolean,
  handleSubmitDirections?: () => void,
  handleAddStepImage?: () => void,
  onDismiss?: () => void,
}

const DirectionsForm = ({
  size = 'medium',
  step,
  handleSubmitDirections,
  handleAddStepImage,
  onDismiss,
  visible,
}: Props) => {
  const stepTitleRef = useRef(null)
  const stepSubTitleRef = useRef(null)
  const stepDescriptionRef = useRef(null)

  const data = [
    {
      placeholder: 'Step title',
      refInput: stepTitleRef,
    },
    {
      placeholder: 'Step sub title',
      refInput: stepSubTitleRef,
    },
    {
      placeholder: 'Step description',
      refInput: stepDescriptionRef,
    },
  ]

  return (
    <Modal
      title="Directions"
      dismissBtn
      onDismiss={onDismiss}
      onSubmit={handleSubmitDirections}
      visible={visible}
      size={size}
    >
      <Wrapper
        direction="row"
        childPosition="left"
        customStyles={{
          marginBottom: METRICS.largeMargin,
        }}
      >
        <Button
          title={step || '1'}
          buttonStyle={[styles.button, styles[`${size}Button`]]}
          titleStyle={[styles.titleBtn, styles[`${size}TitleBtn`]]}
        />
        <Wrapper
          direction="column"
          customStyles={styles.wrapperDirections}
        >
          {data.map(({ placeholder, refInput }) => (
            <TextBox
              key={placeholder}
              placeholder={placeholder}
              refInput={refInput}
              customStyle={[styles.input, styles[`${size}Input`]]}
              placeholderTextColor={COLORS.grayNavy}
              multiline={placeholder === 'Step description'}
              customContainer={styles.inputDirections}
            />
          ))}
          <Icon
            name="add-a-photo"
            size={METRICS[`${size}Icon`]}
            onPress={handleAddStepImage}
            label="Set cover photo"
            wrapperIconStyle={[styles.wrapperIcon, styles.wrapperIconDirections]}
          />
        </Wrapper>
      </Wrapper>
    </Modal>
  )
}

DirectionsForm.defaultProps = {
  visible: false,
  onDismiss: () => {},
  handleSubmitDirections: () => {},
  handleAddStepImage: () => {},
}

export default DirectionsForm
