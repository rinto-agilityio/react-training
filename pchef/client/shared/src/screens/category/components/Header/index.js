// Libs
import React from 'react'
import { Text, View } from 'react-native'

// Styles
import styles from './styles'

// Themes
import { COLORS, METRICS, FONTS } from '../../../../themes'

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
  onFollowing?: () => void | Promise<void>,
  onSelectListView?: (itemName: string) => void,
  isFollow: boolean,
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
}: Props) => {
  const { name, imgUrl } = category

  // Data render list view category
  const data = [
    {
      name: 'view-list',
      wrapperIconStyle: {
        marginRight: METRICS.extraLargeMargin,
        fontSize: FONTS.fontSize.extraExtraLarge,
      },
      color: isGrid ? COLORS.baseGray : COLORS.lighterGray,
    },
    {
      name: 'apps',
      wrapperIconStyle: {
        fontSize: FONTS.fontSize.extraExtraLarge,
      },
      color: isGrid ? COLORS.lighterGray : COLORS.baseGray,
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
            title={`${isFollow ? 'unfollowed' : 'followed'}`}
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
            wrapperIconStyle={item.wrapperIconStyle}
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
  onFollowing: () => {},
  onSelectListView: () => {},
}

export default Header
