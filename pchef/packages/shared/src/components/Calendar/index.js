/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * @format
 * @flow
 */

 // Libs
import React from 'react'
import { View } from 'react-native'
import { Calendar } from 'react-native-calendars'

// Styles
import styles from './styles'

// Themes
import { COLORS } from '../../themes';

const CalendarComponent = ({ selectedDay }) => {
  // Getting the date of next Monday
  const firstDay = new Date()
  firstDay.setDate(firstDay.getDate() + (1 + 7 - firstDay.getDay()) % 7)

  // Getting the date of next last day
  const lastDate = new Date()
  lastDate.setDate(firstDay.getDate() + 6)

  return (
    <View style={styles.container}>
      <Calendar
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={firstDay}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={lastDate}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={day => { console.log('selected day', day) }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={day => { console.log('selected day', day) }}
        // Month format in calendar title
        monthFormat={'MMMM yyyy'}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        style={styles.calendar}
        theme={{
          selectedDayBackgroundColor: COLORS.baseBlue,
          selectedDayTextColor: COLORS.white,
        }}
        markedDates={{
          [selectedDay]: {selected: true}
        }}
        hideExtraDays={true}
      />
    </View>
  )
}

export default CalendarComponent

CalendarComponent.defaultProps = {
  selectedDay: '2019-05-04'
}