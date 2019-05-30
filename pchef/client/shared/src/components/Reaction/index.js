// Libs
import React from 'react'
import { View } from 'react-native'

// Styles
import styles from './styles'

// Themes
import { COLORS, METRICS } from '../../themes'

// Components
import Icon from '../Icon'

type Props = {
  isFavorited?: boolean,
  isVote?: boolean,
  customWrapperIcon?: {},
  size: string,
  votes: Array<string>,
  onPressFavorite?: () => void | Promise<void>,
  onPressVote?: () => void | Promise<void>,
}

const Reaction = ({
  isFavorited,
  customWrapperIcon,
  onPressFavorite,
  onPressVote,
  isVote,
  size = '',
  votes = [],
}: Props) => {
  // Data render reaction icon
  const data = [
    {
      name: 'favorite',
      color: isFavorited ? COLORS.blue : COLORS.grayDarker,
      label: 'Save',
      onPress: onPressFavorite,
    },
    {
      name: 'thumb-up',
      color: isVote ? COLORS.blue : COLORS.grayDarker,
      label: votes.length,
      onPress: onPressVote,
    },
  ]

  return (
    <View style={[styles.wrapperIcon, customWrapperIcon]}>
      {data.map(item => (
        <Icon
          key={item.name}
          name={item.name}
          size={METRICS[`${size}Icon`]}
          color={item.color}
          onPress={item.onPress}
          underlayColor="transparent"
          label={item.label}
        />
      ))}
    </View>
  )
}

Reaction.defaultProps = {
  customWrapperIcon: {},
  onPressFavorite: () => {},
  onPressVote: () => {},
  isFavorited: false,
  isVote: false,
}

export default Reaction
