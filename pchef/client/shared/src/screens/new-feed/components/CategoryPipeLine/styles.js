// Lib
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, FONTS } from '../../../../themes'

const styles = StyleSheet.create({
  pipelineWrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: METRICS.largePadding,
  },
  pipelineItem: {
    marginRight: METRICS.largeMargin,
  },
  pipelineItemName: {
    fontWeight: FONTS.fontWeight.medium,
    textAlign: 'center',
    paddingBottom: METRICS.mediumPadding,
  },
})

export default styles
