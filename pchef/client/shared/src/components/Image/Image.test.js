// Libs
import renderer from 'react-test-renderer'
import { JSDOM } from 'jsdom'

// Components
import Image from '.'

const { document } = new JSDOM('').window
global.document = document
global.window = document.defaultView
global.Image = window.Image

it('renders correctly', () => {
  const image = renderer
    .create(
      <Image
        url="https://vcdn-ngoisao.vnecdn.net/2018/01/19/1-8515-1516314392.jpg"
        disabled
      />
    )
    .toJSON()

  expect(image).toMatchSnapshot()
})
