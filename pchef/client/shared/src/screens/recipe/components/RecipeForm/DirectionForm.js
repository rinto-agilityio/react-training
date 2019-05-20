// Libs
import React, { useRef, useState } from 'react'
import { View } from 'react-native'

// Styles
import styles from './styles'

// Themes
import { COLORS, METRICS } from '../../../../themes'

// Components
import Modal from '../../../../components/Modal'
import Wrapper from '../../../../layout/Wrapper'
import Button from '../../../../components/Button'
import TextBox from '../../../../components/TextBox'
import Icon from '../../../../components/Icon';

type Props = {
  size: string,
  step: string,
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
    >
      <Wrapper
        direction="row"
        childPosition="middle"
        customStyles={{
          marginBottom: METRICS.largeMargin,
        }}
      >
        <Button
          title={step}
          buttonStyle={[styles.button, styles[`${size}Button`]]}
          titleStyle={[styles.titleBtn, styles[`${size}TitleBtn`]]}
          onPress={() => {}}
        />
        <Wrapper
          direction="column"
          childPosition="middle"
          customStyles={{
            marginBottom: METRICS.largeMargin,
          }}
        >
          {data.map(({ placeholder, refInput }) => (
            <TextBox
              key={placeholder}
              placeholder={placeholder}
              refInput={refInput}
              customStyle={[styles.input, styles[`${size}Input`]]}
              placeholderTextColor={COLORS.grayNavy}
            />
          ))}
          <Icon
            name="add-a-photo"
            size={METRICS.largeImage}
            onPress={handleAddStepImage}
            label="Set cover photo"
            wrapperIconStyle={styles.wrapperIcon}
          />
        </Wrapper>
      </Wrapper>
    </Modal>
  )
}

DirectionsForm.defaultProps = {
  handleSubmitDirections: () => {},
  handleAddStepImage: () => {},
}

export default DirectionsForm
