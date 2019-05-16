// Libs
import renderer from 'react-test-renderer'

// Components
import Recipe from '.'

it('renders correctly', () => {
  const recipe = renderer.create(
    <Recipe
      size="medium"
      recipe={{
        imgUrl: 'https://vcdn-ngoisao.vnecdn.net/2018/01/19/1-8515-1516314392.jpg',
        title: 'Bun Bo Hue Recipe',
        description: '2lb pork neck bones, 2lb beef bones, 1lb oxtail',
        votes: [1],
      }}
    />,
  ).toJSON()

  expect(recipe).toMatchSnapshot()
});
