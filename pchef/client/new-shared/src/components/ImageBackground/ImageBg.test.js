// Libs
import { Text } from 'react-native'
import renderer from 'react-test-renderer'

// Components
import ImageBackground from '.'

it('renders correctly', () => {
  const image = renderer.create(
    <ImageBackground
      url="https://vcdn-ngoisao.vnecdn.net/2018/01/19/1-8515-1516314392.jpg"
    >
      <Text>Children</Text>
    </ImageBackground>,
  ).toJSON()

  expect(image).toMatchSnapshot()
});
