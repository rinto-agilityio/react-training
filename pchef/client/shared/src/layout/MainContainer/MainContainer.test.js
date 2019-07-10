// Components
import { Text } from 'react-native'
import MainContainer from '.'

describe('MainContainer', () => {
  it('Should render type web', () => {
    const component = renderer
      .create(
        <MainContainer type="web">
          <Text>test</Text>
        </MainContainer>
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('Should render type mobile', () => {
    const component = renderer
      .create(
        <MainContainer type="mobile">
          <Text>test</Text>
        </MainContainer>
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
