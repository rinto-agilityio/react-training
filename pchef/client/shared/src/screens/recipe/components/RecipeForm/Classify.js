/* eslint-disable react/require-default-props */
// Libs
import React, { useState, useEffect, forwardRef } from 'react'

// Themes
import { METRICS } from '../../../../themes'

// Components
import Modal from '../../../../components/Modal'
import Wrapper from '../../../../layout/Wrapper'
import RadioButton from '../../../../components/RadioButon'
import Loading from '../../../../components/Loading'
import Error from '../../../../components/Error'

// Constants
import { MODAL_PADDING } from '../../../../constants'

// Helpers
import { customError } from '../../../../helpers/utils'

type Props = {
  size: string,
  title: string,
  visible?: boolean,
  categories: Array<{
    id: string,
    name: string,
    imgUrl: string,
  }>,
  cookingTypes: Array<{
    id: string,
    name: string,
    imgUrl: string,
  }>,
  loading: boolean,
  error: {
    graphQLErrors: Array<{ message: string }>,
  },
  onDismiss?: () => void,
  handleSubmit: (value: {}) => void,
  handleRedirectLogin: () => void,
}

const Classify = forwardRef(({
  size = 'medium',
  categories = [],
  cookingTypes = [],
  onDismiss = () => { },
  visible = false,
  title,
  handleSubmit,
  loading,
  error,
  handleRedirectLogin,
}: Props, ref) => {
  const data = title === 'Categories' ? categories : cookingTypes
  const defaultValue = data[0] || {}
  const [value, setValue] = useState(defaultValue.id)
  const [radioWidth, setRadioWidth] = useState()
  const radioButtonValue = data.find(item => item.id === value) || {}
  const [visibled, setVisibled] = useState(true)

  useEffect(() => (
    setValue(defaultValue.id)
  ), [loading, defaultValue.id])

  if (loading) {
    return <Loading size={size} />
  }

  const handleNavigateLogin = () => {
    setVisibled(false)
    handleRedirectLogin()
  }

  if (error) {
    return (
      <Modal
        visible={visibled}
        onDismiss={() => handleNavigateLogin()}
        onSubmit={() => handleNavigateLogin()}
        size={size}
        customDialog={{ top: 150 }}
      >
        <Error message={customError(error.graphQLErrors)} size="medium" />
      </Modal>
    )
  }

  return (
    <Modal
      title={title}
      dismissBtn
      onDismiss={onDismiss}
      onSubmit={() => handleSubmit(radioButtonValue)}
      visible={visible}
      size={size}
    >
      <Wrapper
        direction="row"
        childPosition="spaceBetween"
        customStyles={{
          marginBottom: METRICS.largeMargin,
          paddingRight: 0,
          paddingLeft: 0,
        }}
        onLayout={event => event && setRadioWidth((event.nativeEvent.layout.width - MODAL_PADDING) / 2)} // 48 is padding of content modal
      >
        <RadioButton
          onPress={info => setValue(info)}
          customWrapperStyle={{
            width: radioWidth,
          }}
          group={data}
          value={value}
        />
      </Wrapper>
    </Modal>
  )
})

export default Classify
