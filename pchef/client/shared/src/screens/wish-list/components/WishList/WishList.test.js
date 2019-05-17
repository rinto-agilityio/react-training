// Components
import WistList from '.'
import Item from './Item'

describe('Wish list', () => {
  const item = {
    id: 1,
    date: Date.now(),
    categoryId: 1,
    cookingTypeId: 1,
  }
  const wishList = mount(<WistList wishList={[item]} />)
  const wish = shallow(<Item item={item} />)

  it('Renders correctly wish list commponent', () => {
    expect(wishList).toMatchSnapshot()
  })

  it('Renders correctly wish commponent', () => {
    expect(wish).toMatchSnapshot()
  })

  it('Render wish list component with size medium', () => {
    wishList.setProps({
      size: 'medium',
    })
    expect(wishList).toMatchSnapshot()
  })

  it('Render wish component with size medium', () => {
    wish.setProps({
      size: 'medium',
    })
    expect(wish).toMatchSnapshot()
  })
})
