import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { users } from '../../../test/__mocks__/sample-data';
import Info from './Info';

storiesOf('AccountScreen', module).add('Info', () => <Info data={users[0]} />);
