// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { memo } from 'react'
import { View } from 'react-native'
import { Calendar } from 'react-native-calendars'

// Styles
import styles from './styles'

// Themes
import { COLORS, FONTS } from '../../themes'

// Constants
import { CALENDAR_TITLE_FORMAT } from '../../constants'
import Icon from '../Icon'

type Props = {
  selectedDay: string,
  dayRange: {
    minDate: string,
    maxDate: string
  },
  customWrapperStyles?: {},
  customCalendarStyles?: {},
  customThemes?: {},
  onSelectDay?: ({ dateString: string }) => void,
}

/**
 * Pass dayRange with minDate, maxDate with format YYYY-MM-DD
 * to enable date select (dates outside dayRange will be grayed out).
 * Custom styles and themes for calendar with customCalendarStyles
 * and customThemes props.
 * Custom month format in calendar title to MMMM yyyy (Example: May 2019).
 */
const CalendarComponent = ({
  selectedDay,
  dayRange = {},
  customCalendarStyles,
  customThemes,
  customWrapperStyles,
  onSelectDay,
}: Props) => (
  <View style={[styles.container, customWrapperStyles]}>
    <Calendar
      minDate={dayRange.minDate}
      maxDate={dayRange.maxDate}
      onDayPress={onSelectDay}
      monthFormat={CALENDAR_TITLE_FORMAT}
      style={[styles.calendar, customCalendarStyles]}
      theme={{
        selectedDayBackgroundColor: COLORS.calendar.selectDayBg,
        selectedDayTextColor: COLORS.calendar.selectDayText,
        todayTextColor: COLORS.calendar.todayText,
        ...customThemes,
      }}
      markedDates={{
        [selectedDay]: { selected: true },
      }}
      hideExtraDays
      renderArrow={direction => (
        <Icon
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
          size={FONTS.fontSize.large}
          color={COLORS.icon.calendar}
          wrapperIconStyle={{
            zIndex: -2,
          }}
        />
      )}
    />
  </View>
)

CalendarComponent.defaultProps = {
  customWrapperStyles: {},
  customCalendarStyles: {},
  customThemes: {},
  onSelectDay: () => {},
}

export default memo<Props>(CalendarComponent)
