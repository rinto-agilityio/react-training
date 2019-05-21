// Libs
import React, { useState, useRef } from 'react'
import { View } from 'react-native'

// Styles
import styles from './styles'

// Themes
import { COLORS } from '../../../../themes'

// Helpers
import { getDateForCalendar, getDateOfWeek } from '../../../../helpers/date-time'

// Components
import TextBox from '../../../../components/TextBox'
import Button from '../../../../components/Button'
import Calendar from '../../../../components/Calendar'
import Modal from '../../../../components/Modal'

type Props = {
  size: string,
}

const WishListForm = ({
  size = 'medium',
}: Props) => {
  const categoryRef = useRef(null)
  const cookingTypeRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const today = getDateForCalendar(Date.now())
  const [selectedDay, setSelectedDay] = useState(today)

  const dayRange = getDateOfWeek()

  // Data render wish list form input
  const data = [
    {
      placeholder: 'Category',
      refInput: categoryRef,
    },
    {
      placeholder: 'Cooking type',
      refInput: cookingTypeRef,
    },
  ]
  return (
    <View style={styles.container}>
      <Button
        onPress={() => setVisible(true)}
        title="Select date"
      />
      {visible && (
        <Modal
          onDismiss={() => setVisible(false)}
          visible={visible}
          onSubmit={() => setVisible(false)}
          size={size}
        >
          <Calendar
            selectedDay={selectedDay}
            dayRange={dayRange}
            onSelectDay={({ dateString }) => setSelectedDay(dateString)}
            size={size}
          />
        </Modal>
      )}
      {data.map(({ placeholder, refInput }) => (
        <TextBox
          key={placeholder}
          placeholder={placeholder}
          refInput={refInput}
          customStyle={[styles.input, styles[`${size}Input`]]}
          placeholderTextColor={COLORS.grayNavy}
        />
      ))}
    </View>
  )
}

export default WishListForm
