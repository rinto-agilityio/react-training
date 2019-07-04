// Libs
import { withInfo } from '@storybook/addon-info';

/**
 * Style for header and body when using withInfo addon in storybook
 */
const wInfoStyle = {
  header: {
    h1: {
      color: 'red',
    },
  },
  infoBody: {
    backgroundColor: 'bisque',
  },
}

export const wInfo = () => withInfo( { styles: wInfoStyle } )
