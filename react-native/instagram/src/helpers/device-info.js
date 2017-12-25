// Libs
import { Platform } from 'react-native'

/**
 * Get device platform
 * @returns {boolean} - Detect iOS platform or not
 */
const isIOS = () => Platform.OS === 'ios'

/**
 * TODO: More helpers, like check version of iPhone/Android device
 * Only check platform for now
 */
export { isIOS }
