// Libs
import React, { useState } from 'react'

// Themes
import { METRICS } from '../../../../themes'

// Components
import Modal from '../../../../components/Modal'
import Wrapper from '../../../../layout/Wrapper'
import RadioButton from '../../../../components/RadioButon'

type Props = {
  size: string,
  title: string,
  visible?: boolean,
  onDismiss?: () => void,
  handleSubmit?: (value: string) => void,
  data: Array<{
    id: string,
    name: string,
  }> | Array<{
    id: string,
    name: string,
    imgUrl: string,
  }>,
}

const Classify = ({
  size = 'medium',
  data = [],
  onDismiss,
  visible,
  title,
  handleSubmit,
}: Props) => {
  const defaultValue = data[0] || {}
  const [value, setValue] = useState(defaultValue)

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
}

Classify.defaultProps = {
  visible: false,
  onDismiss: () => {},
  handleSubmit: () => {},
}

export default Classify
