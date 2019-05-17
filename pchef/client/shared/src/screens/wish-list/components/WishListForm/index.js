// Libs
import React, { useState } from 'react'
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
  size?: string,
  categoryRef: { current: HTMLInputElement | null },
  cookingTypeRef: { current: HTMLInputElement | null },
  onSubmit?: () => void,
}

const WishListForm = ({
  size = 'medium',
  categoryRef,
  cookingTypeRef,
  onSubmit,
}: Props) => {
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
      <Portal style={{alignItems: 'center',}}>
        <Dialog
          visible={visible}
          onDismiss={() => setVisible(false)}
          style={{
            width: 500
          }}
        >
          <Dialog.Content style={[styles.content, styles[`${size}Content`]]}>
            <Calendar
              selectedDay={selectedDay}
              dayRange={dayRange}
              onSelectDay={day => setSelectedDay(day.dateString)}
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
        onSubmitEditing={onSubmit}
        customStyle={[styles.input, styles[`${size}Input`]]}
        placeholderTextColor={COLORS.grayNavy}
      />
      <TextBox
        placeholder="Cooking type"
        refInput={cookingTypeRef}
        onSubmitEditing={onSubmit}
        customStyle={[styles.input, styles[`${size}Input`]]}
        placeholderTextColor={COLORS.grayNavy}
      />
    </View>
  )
}

WishListForm.defaultProps = {
  onSubmit: () => {},
  size: 'medium',
}

export default WishListForm
