// Components
import { Text } from 'react-native'
import Wrapper from '.'

it('Wrapper snapshot', () => {
  // define props
  const props = {
    direction: 'row',
    childPosition: 'start',
    flexGrow: 0,
    customStyles: {
      width: 200,
    },
    onLayout: () => {},
  }

  const wrapper = shallow(
    <Wrapper {...props}>
      <Text>Test</Text>
    </Wrapper>,
  )

  expect(wrapper).toMatchSnapshot()
})
