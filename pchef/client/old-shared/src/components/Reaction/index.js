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
  isFavorited: boolean,
  customWrapperIcon?: {},
  size: string,
  votes: Array<number>,
  onClickFavorite?: () => void,
  onClickVote?: () => void,
}

const Reaction = ({
  isFavorited,
  customWrapperIcon,
  onClickFavorite,
  onClickVote,
  size = '',
  votes = [],
}: Props) => {
  // Data render reaction icon
  const data = [
    {
      name: isFavorited ? 'heart' : 'heart-o',
      color: COLORS.grayDarker,
      label: 'Save',
      onClick: onClickFavorite,
    },
    {
      name: 'thumbs-up',
      color: COLORS.grayDarker,
      label: votes.length,
      onClick: onClickVote,
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
          onClick={item.onClick}
          underlayColor="transparent"
          label={item.label}
        />
      ))
      }
    </View>
  )
}

Reaction.defaultProps = {
  customWrapperIcon: {},
  onClickFavorite: () => {},
  onClickVote: () => {},
}

export default Reaction
