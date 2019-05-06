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
import Icon from 'react-native-vector-icons/FontAwesome'

// Styles
import styles from './styles'

// Themes
import { COLORS, METRICS } from '../../themes'

// Constants
import { CALENDAR_TITLE_FORMAT } from '../../constants'

// Helpers
import { getDateForCalendar } from '../../helpers/date-time'

type Props = {
  selectedDay: string,
  dayRange: {
    minDate: string,
    maxDate: string
  },
  customWrapperStyles: {},
  customCalendarStyles: {},
  customThemes: {},
  onSelectDay: () => void
}

const CalendarComponent = ({
  selectedDay,
  dayRange,
  customCalendarStyles,
  customThemes,
  customWrapperStyles,
  onSelectDay
}: Props) => (
  <View style={[styles.container, customWrapperStyles]}>
    <Calendar
      // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
      minDate={dayRange.minDate}
      // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
      maxDate={dayRange.maxDate}
      // Handler which gets executed on day press. Default = undefined
      onDayPress={onSelectDay}
      // Month format in calendar title, example: May 2019
      monthFormat={CALENDAR_TITLE_FORMAT}
      style={[styles.calendar, customCalendarStyles]}
      theme={{
        selectedDayBackgroundColor: COLORS.baseBlue,
        selectedDayTextColor: COLORS.white,
        todayTextColor: COLORS.darkBlue,
        ...customThemes
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
  selectedDay: getDateForCalendar(Date.now()), // Format of selected day props is YYYY-MM-DD
  dayRange: {},
  customWrapperStyles: {},
  customCalendarStyles: {},
  customThemes: {},
  onSelectDay: () => {}
}

export default CalendarComponent