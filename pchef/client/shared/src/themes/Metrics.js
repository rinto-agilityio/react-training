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
  avatar: {
    sm: 40,
    md: 60,
    lg: 70,
  },

  // Layer
  layer: {
    active: 0.2,
    inactive: 0.7,
  },

  // Border
  borderWidth: {
    sm: 1,
    md: 3,
    lg: 5,
  },

  // Height
  height: {
    sm: 30,
    md: 50,
  },

  // Button
  button: {
    sm: 150,
    lg: 260,
  },

  // Window
  screen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    sm: 320,
    md: 640,
    lg: 840,
    xl: 1024,
  },

  // Item
  item: {
    sm: '33.33%',
    md: '50%',
    lg: '100%',
  },

  // z-index
  zIndex: {
    min: -1,
    max: 1000,
  },

  // Directions icon
  directionIcon: {
    sm: 120,
    md: 170,
    lg: 190,
  },

  // Icon
  smallIcon: 20,
  mediumIcon: 30,
  largeIcon: 40,

  // Truncate text
  truncate: {
    maxWidth: 250,
    overflow: 'hidden',
  },
}
