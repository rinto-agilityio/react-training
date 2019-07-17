// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { memo } from 'react'
import { Text, View } from 'react-native'

// Styles
import styles from './styles'

// Themes
import { COLORS, METRICS } from '../../../../themes'

// Components
import ImageBackground from '../../../../components/ImageBackground'
import Icon from '../../../../components/Icon'
import Button from '../../../../components/Button'

type Props = {
  category: {
    name: string,
    imgUrl: string,
  },
  customTitle?: {},
  isGrid: boolean,
  customWrapperIcon?: {},
  size?: string,
  onFollowing: () => void | Promise<void>,
  onSelectListView?: (itemName: string) => void,
  isFollow: boolean,
  wrapperIconStyle: Object,
}

const Header = ({
  category,
  onFollowing,
  customTitle,
  isGrid,
  customWrapperIcon,
  onSelectListView = () => {},
  size = '',
  isFollow,
  wrapperIconStyle,
}: Props) => {
  const { name, imgUrl } = category
  const titleButton = isFollow ? 'Unfollowed' : 'Followed'

  // Data render list view category
  const data = [
    {
      name: 'view-list',
      color: isGrid ? COLORS.icon.categoryInActive : COLORS.icon.categoryActive,
    },
    {
      name: 'apps',
      color: isGrid ? COLORS.icon.categoryActive : COLORS.icon.categoryInActive,
    },
  ]

  return (
    <>
      <View style={[styles.wrapperHeader, styles[`${size}Header`]]}>
        <ImageBackground
          url={imgUrl}
          customImageBg={METRICS.flexCenter}
          resizeMode="cover"
        >
          <Text style={[styles.title, styles[`${size}Title`], customTitle]}>
            {name}
          </Text>
          <Button
            title={titleButton}
            type="outline"
            onPress={onFollowing}
            buttonStyle={styles.button}
            titleStyle={styles.titleBtn}
            size={size}
          />
        </ImageBackground>
      </View>
      <View style={[styles.wrapperHeaderIcon, customWrapperIcon]}>
        {data.map(item => (
          <Icon
            key={item.name}
            name={item.name}
            size={METRICS[`${size}Icon`]}
            color={item.color}
            wrapperIconStyle={wrapperIconStyle}
            onPress={() => onSelectListView(item.name)}
          />
        ))}
      </View>
    </>
  )
}

Header.defaultProps = {
  customWrapperIcon: {},
  customTitle: {},
  size: 'small',
  onSelectListView: () => {},
}

export default memo<Props>(Header)
