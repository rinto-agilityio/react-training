// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { useRef, useState, memo } from 'react'
import { View, Text } from 'react-native'

// Styles
import styles from './styles'

// Themes
import { COLORS, METRICS } from '../../../../themes'

// Helpers
import { validator } from '../../../../helpers/validators'
import { getValueTextBox } from '../../../../helpers/utils'

// Components
import Directions from '../Recipe/Directions'
import Modal from '../../../../components/Modal'
import Wrapper from '../../../../layout/Wrapper'
import Button from '../../../../components/Button'
import TextBox from '../../../../components/TextBox'
import Icon from '../../../../components/Icon'
import Error from '../../../../components/Error'
import Image from '../../../../components/Image'

// Constants
import { WEB_PLATFORM } from '../../../../constants'

type Props = {
  size: string,
  recipeId: string,
  visible?: boolean,
  handleAddStepImage?: () => void,
  onDismiss: (directions: Object) => void,
  createRecipeStep: (
    recipeId: string,
    title: string,
    step: number,
    imgUrl: string,
    description: string,
  ) => Promise<{
    data: {
      createRecipeStep: {
        id: string,
        step: number,
        title: string,
      }
    }}>,
  stepUrl?: string,
  handleAddStepImageOnWeb?: () => void,
  uploadStepImage: () => Promise<void>,
}

const DirectionsForm = ({
  size = 'medium',
  handleAddStepImage,
  onDismiss,
  visible,
  recipeId,
  createRecipeStep,
  stepUrl,
  handleAddStepImageOnWeb,
  uploadStepImage,
}: Props) => {
  const stepTitleRef = useRef(null)
  const stepDescriptionRef = useRef(null)
  const [directions, setDirections] = useState([])
  const [isShowForm, setNextStep] = useState(!directions.length)
  const [error, setError] = useState('')
  const nextStep = directions.length + 1

  const data = [
    {
      placeholder: 'Step title',
      refInput: stepTitleRef,
    },
    {
      placeholder: 'Step description',
      refInput: stepDescriptionRef,
    },
  ]

  const handleSubmit = async () => {
    const title = getValueTextBox(stepTitleRef.current) || ''
    const errors = validator({
      title,
      step: nextStep,
      recipeId,
    })
    if (!errors.isError) {
      try {
        const imageStep = await uploadStepImage()
        await createRecipeStep(
          recipeId,
          title,
          nextStep,
          imageStep || '',
          getValueTextBox(stepDescriptionRef.current) || '',
        ).then(({ data = {} }) => {
          directions.push(data.createRecipeStep)
          setDirections(directions)
          setNextStep(false)
        })
      } catch (err) {
        setError(err)
      }
    }
  }

  if (error) {
    return <Error message={error} />
  }

  return (
    <Modal
      title="Directions"
      onSubmit={() => onDismiss(directions)}
      onDismiss={onDismiss}
      visible={visible}
      size={size}
      customDialog={{
        width: size === 'large' ? METRICS.largeScreen : 'auto',
      }}
    >
      {/* Show steps after create success */}
      {directions.length ? (
        <Directions
          steps={directions}
          size={size}
        />
      ) : null}

      {/* Show create step form  */}
      {isShowForm ? (
        <Wrapper
          direction="row"
          childPosition="middle"
          customStyles={{
            marginBottom: METRICS.largeMargin,
          }}
        >
          <Button
            title={nextStep.toString()}
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
            {WEB_PLATFORM ? (
              <View>
                <Text
                  for="file-input-step"
                  accessibilityRole="label"
                >
                  <Icon
                    name="add-a-photo"
                    size={METRICS[`${size}Icon`]}
                    onPress={handleAddStepImage}
                    label="Set cover photo"
                    wrapperIconStyle={[styles.wrapperIcon, styles.wrapperIconDirections]}
                  />
                </Text>
                <input
                  id="file-input-step"
                  type="file"
                  style={{
                    display: 'none',
                  }}
                  onChange={handleAddStepImageOnWeb}
                />
              </View>
            ) : (
              <Icon
                name="add-a-photo"
                size={METRICS[`${size}Icon`]}
                onPress={handleAddStepImage}
                label="Set cover photo"
                wrapperIconStyle={[styles.wrapperIcon, styles.wrapperIconDirections]}
              />
            )}
            {stepUrl ? (
              <Image url={stepUrl} customImageStyle={{ width: '100%', height: 150 }} />
            ) : null}
          </Wrapper>
        </Wrapper>
      ) : null }
      <Wrapper
        direction="row"
        childPosition="middle"
        customStyles={{
          marginBottom: METRICS.largeMargin,
        }}
      >
        <Icon
          name="add"
          size={METRICS[`${size}Icon`]}
          onPress={() => setNextStep(true)}
          label="Add more step"
          customStyle={[styles.label, styles[`${size}Input`]]}
          disabled={isShowForm}
        />
        <Button
          title="Save"
          buttonStyle={styles[`${size}Button`]}
          titleStyle={styles[`${size}TitleBtn`]}
          onPress={handleSubmit}
        />
      </Wrapper>
    </Modal>
  )
}

DirectionsForm.defaultProps = {
  visible: false,
  handleAddStepImage: () => {},
  stepUrl: '',
  handleAddStepImageOnWeb: () => {},
}

export default memo<Props>(DirectionsForm)
