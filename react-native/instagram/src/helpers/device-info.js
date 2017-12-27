// Libs
import { Platform } from 'react-native'

/**
 * Get device platform
 * @returns {boolean} - Detect iOS platform or not
 */
const isIOS = () => Platform.OS === 'ios',
  deviceVersion = Platform.Version

/**
 * TODO: More helpers, like check version of iPhone/Android device
 * Only check platform for now
 */
export { isIOS, deviceVersion }
