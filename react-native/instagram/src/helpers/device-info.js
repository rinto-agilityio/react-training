// Libs
import { Platform } from 'react-native'

/**
 * Get device platform
 * @returns {boolean} - Detect iOS platform or not
 */
export const isIOS = () => Platform.OS === 'ios'
