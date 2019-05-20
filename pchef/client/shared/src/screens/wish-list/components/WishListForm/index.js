// Libs
import React, { useState, useRef } from 'react'
import { View } from 'react-native'
import { Portal, Dialog } from 'react-native-paper'

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
  return (
    <View style={styles.container}>
      <Button
        onPress={() => setVisible(true)}
        title="Select date"
      />
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={() => setVisible(false)}
          style={[styles.dialog, styles[`${size}Dialog`]]}
        >
          <Dialog.Content style={[styles.content, styles[`${size}Content`]]}>
            <Calendar
              selectedDay={selectedDay}
              dayRange={dayRange}
              onSelectDay={({ dateString }) => setSelectedDay(dateString)}
              size={size}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => setVisible(false)}
              title="Done"
            />
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <TextBox
        placeholder="Category"
        refInput={categoryRef}
        customStyle={[styles.input, styles[`${size}Input`]]}
        placeholderTextColor={COLORS.grayNavy}
      />
      <TextBox
        placeholder="Cooking type"
        refInput={cookingTypeRef}
        customStyle={[styles.input, styles[`${size}Input`]]}
        placeholderTextColor={COLORS.grayNavy}
      />
    </View>
  )
}

export default WishListForm
