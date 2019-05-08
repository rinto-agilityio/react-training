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
    title: string,
    img_url: string,
    id: string
  },
  customTitle?: {},
  customButton?: {},
  customTitleBtn?: {},
  isGrid: boolean,
  customWrapperIcon: {},
  size?: string,
  onFollowing?: () => void,
  onSelectListView?: () => void
}

const Header = ({
  category,
  onFollowing,
  customTitle,
  isGrid,
  customWrapperIcon,
  onSelectListView,
  size = ''
}: Props) => {
  const {
    title,
    img_url,
    id
  } = category

  // Data render list view category
  const data = [
    {
      name: 'th-list',
      wrapperIconStyle: {
        marginRight: METRICS.extraLargeMargin
      },
      color: isGrid ? COLORS.lighterGray : COLORS.baseGray
    },
    {
      name: 'th',
      wrapperIconStyle: {},
      color: isGrid ? COLORS.baseGray : COLORS.lighterGray
    }
  ]

  return (
    <View style={[styles.wrapperHeader, styles[`${size}Header`]]}>
      <ImageBackground
        url={img_url}
        customImageBg={METRICS.flexCenter}
        resizeMode="cover"
      >
        <Text style={[
          styles.title,
          styles[`${size}Title`],
          customTitle
        ]}>
          {title}
        </Text>
        <Button
          title="Following"
          typeName="outline"
          onClick={onFollowing}
          buttonStyle={styles.button}
          titleStyle={styles.titleBtn}
          size={size}
        />
      </ImageBackground>
      <View style={[styles.wrapperHeaderIcon, customWrapperIcon]}>
        {data.map(item => (
          <Icon
            key={item.name}
            name={item.name}
            size={METRICS[`${size}Icon`]}
            color={item.color}
            wrapperIconStyle={item.wrapperIconStyle}
            onClick={onSelectListView}
            underlayColor="transparent"
          />
        ))
        }
      </View>
    </View>
  )
}

Header.defaultProps = {
  customWrapperIcon: {},
  customImageBg: {},
  customTitle: {},
  size: 'small',
  onFollowing: () => {},
  onSelectListView: () => {}
}

export default Header