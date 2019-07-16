import { Dimensions } from 'react-native'

export default {
  // Padding
  padding: {
    sm: 5,
    md: 10,
    lg: 20,
    xl: 30,
  },

  // Margin
  margin: {
    none: 0,
    sm: 5,
    md: 10,
    lg: 20,
    xl: 30,
    hg: 200,
  },

  // Input
  input: {
    sm: 20,
    md: 40,
    lg: 60,
  },

  // Image
  image: {
    xs: 60,
    sm: 80,
    md: 100,
    lg: 150,
    xl: 300,
  },

  // Content
  content: {
    sm: 400,
    md: 500,
    lg: 700,
  },

  // Wrapper
  wrapper: {
    sm: 150,
    md: 200,
    lg: 300,
    xl: 380,
  },

  // Position
  position: {
    none: 0,
    sm: 10,
    md: 15,
    lg: 50,
    xl: 150,
  },

  // Line Height
  lineHeight: {
    sm: 21,
    md: 25,
  },

  // Flex
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Icon
  icon: {
    sm: 20,
    md: 30,
    lg: 40,
  },

  // Header
  header: {
    sm: 250,
    md: 300,
    lg: 500,
  },

  // Border Radius
  borderRadius: {
    xs: 5,
    sm: 8,
    md: 10,
    lg: 20,
  },

  // Backgroud Image
  bgImage: {
    sm: 150,
    md: 230,
    lg: 300,
  },

  // Badge
  badge: {
    sm: 5,
    md: 10,
    lg: 16,
  },

  // Avatar
  smallAvatar: 40,
  mediumAvatar: 60,
  largeAvatar: 70,

  // Layer
  activeItem: 0.2,
  inactiveItem: 0.7,

  // Border
  smallBorderWidth: 1,
  mediumBorderWidth: 3,
  largeBorderWidth: 5,

  // height
  smallHeight: 30,
  mediumHeight: 50,

  // button
  largeButton: 260,
  smallButton: 150,

  // Window
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
  smallScreen: 320,
  mediumScreen: 640,
  largeScreen: 840,
  extraLargeScreen: 1024,
  smallPercentItem: '33.33%',
  mediumPercentItem: '50%',

  // z-index
  modalZindex: 1000,
  iconZindex: -1,

  // Directions icon
  smallDirectionsIcon: 120,
  mediumDirectionsIcon: 170,
  largeDirectionsIcon: 190,

  // Truncate text
  truncate: {
    maxWidth: 250,
    overflow: 'hidden',
  },
}
