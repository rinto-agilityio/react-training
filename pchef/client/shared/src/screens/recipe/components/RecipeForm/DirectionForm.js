// Libs
import React, { useRef, useState } from 'react'
import { View, Text, Platform } from 'react-native'

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
}: Props) => {
  const stepTitleRef = useRef(null)
  const stepDescriptionRef = useRef(null)
  const [directions, setDirections] = useState([])
  const [isShowForm, setNextStep] = useState(!directions.length)
  const [error, setError] = useState('')
  const nextStep = directions.length + 1
  const isWeb = Platform.OS === 'web'

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
        await createRecipeStep(
          recipeId,
          title,
          nextStep,
          stepUrl || '',
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
            <View>
              <Text
                for="file-input"
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
              {
                isWeb && (
                  <input
                    id="file-input"
                    type="file"
                    style={{
                      display: 'none',
                    }}
                    onChange={handleAddStepImageOnWeb}
                  />
                )
              }
            </View>
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

export default DirectionsForm
