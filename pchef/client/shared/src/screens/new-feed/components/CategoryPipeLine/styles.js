// Lib
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, FONTS } from '../../../../themes'

const styles = StyleSheet.create({
  pipelineWrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: METRICS.padding.lg,
  },
  pipelineItem: {
    marginRight: METRICS.margin.lg,
  },
  pipelineItemName: {
    fontWeight: FONTS.fontWeight.medium,
    textAlign: 'center',
    paddingBottom: METRICS.padding.sm,
  },
})

export default styles
