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
  error: {},
  onDismiss?: () => void,
  handleSubmit: (value: {}) => void,
}

const Classify = forwardRef(({
  size = 'medium',
  categories = [],
  cookingTypes = [],
  onDismiss = () => {},
  visible = false,
  title,
  handleSubmit,
  loading,
  error,
}: Props, ref) => {
  const data = title === 'Categories' ? categories : cookingTypes
  const defaultValue = data[0] || {}
  const [value, setValue] = useState(defaultValue)
  useEffect(() => (
    setValue(defaultValue)
  ), [loading, defaultValue])

  if (loading) {
    return <Loading size={size} />
  }

  return (
    <Modal
      title={title}
      dismissBtn
      onDismiss={onDismiss}
      onSubmit={() => handleSubmit(value)}
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
        {data.map(({ id, name }) => (
          <RadioButton
            key={id}
            value={id}
            onPress={() => setValue({ id, name })}
            label={name}
            status={value.id === id}
            customWrapperStyle={{
              width: '33.33%',
            }}
          />
        ))}
      </Wrapper>
    </Modal>
  )
})

export default Classify
