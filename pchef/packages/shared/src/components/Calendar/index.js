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
import Icon from 'react-native-vector-icons/FontAwesome';

// Styles
import styles from './styles'

// Themes
import { COLORS, METRICS } from '../../themes';

const CalendarComponent = ({ selectedDay, dayRange }) => (
  <View style={styles.container}>
    <Calendar
      // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
      minDate={dayRange.minDate}
      // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
      maxDate={dayRange.maxDate}
      // Handler which gets executed on day press. Default = undefined
      onDayPress={day => { console.log('selected day', day) }}
      // Handler which gets executed on day long press. Default = undefined
      onDayLongPress={day => { console.log('selected day', day) }}
      // Month format in calendar title, example: May 2019
      monthFormat={'MMMM yyyy'}
      style={styles.calendar}
      theme={{
        selectedDayBackgroundColor: COLORS.baseBlue,
        selectedDayTextColor: COLORS.white,
        todayTextColor: COLORS.darkBlue
      }}
      markedDates={{
        [selectedDay]: {selected: true}
      }}
      hideExtraDays={true}
      renderArrow={direction => (
        <Icon
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
          size={METRICS.fontSize.large}
          color={COLORS.baseBlue}
        />
      )}
    />
  </View>
)

CalendarComponent.defaultProps = {
  selectedDay: '2019-05-04', // Format of selected day props is YYYY-MM-DD
  dayRange: {}
}

export default CalendarComponent