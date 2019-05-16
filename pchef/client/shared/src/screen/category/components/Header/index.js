// Libs
import React from 'react'
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
  onFollowing?: () => void,
  onSelectListView?: () => void,
}

const Header = ({
  category,
  onFollowing,
  customTitle,
  isGrid,
  customWrapperIcon,
  onSelectListView,
  size = '',
}: Props) => {
  const { name, imgUrl } = category

  // Data render list view category
  const data = [
    {
      name: 'view-list',
      wrapperIconStyle: {
        marginRight: METRICS.extraLargeMargin,
      },
      color: isGrid ? COLORS.lighterGray : COLORS.baseGray,
    },
    {
      name: 'apps',
      wrapperIconStyle: {},
      color: isGrid ? COLORS.baseGray : COLORS.lighterGray,
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
            title="Following"
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
            onPress={onSelectListView}
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
