// Libs
import React, { useState } from 'react'

// Themes
import { METRICS } from '../../../../themes'

// Components
import Modal from '../../../../components/Modal'
import Wrapper from '../../../../layout/Wrapper'
import RadioButton from '../../../../components/RadioButon'
import Indicator from '../../../../components/Indicator'

type Props = {
  size: string,
  title: string,
  visible?: boolean,
  onDismiss?: () => void,
  handleSubmit?: ({}) => void,
  data: Array<{
    id: string,
    name: string,
    imgUrl: string,
  }>,
  loading: boolean,
  error: {},
}

const Classify = ({
  size = 'medium',
  data = [],
  onDismiss,
  visible,
  title,
  handleSubmit,
  loading,
  error,
}: Props) => {
  const [value, setValue] = useState({})

  if (loading) {
    return <Indicator size={size} />
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
        {data.map(({ id, name }) => {
          const itemId = value.id || data[0].id
          return (
            <RadioButton
              key={id}
              value={id}
              onPress={() => setValue({ id, name })}
              label={name}
              status={itemId === id}
              customWrapperStyle={{
                width: '33.33%',
              }}
            />
          )
        })}
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
