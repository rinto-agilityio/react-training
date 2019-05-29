// Components
import WistList from '.'
import Item from './Item'

// Mocks
import { wishList, categories, cookingTypes } from '../../../../mocks'

describe('Wish list', () => {
  let wishListProps = {
    wishList,
  }

  let wishProps = {
    item: wishList[0],
  }

  it('Renders correctly wish list commponent', () => {
    const wishList = renderer.create(<WistList {...wishListProps} />).toJSON()
    expect(wishList).toMatchSnapshot()
  })

  it('Renders correctly wish commponent', () => {
    const wish = renderer.create(<Item {...wishProps} />).toJSON()
    expect(wish).toMatchSnapshot()
  })

  it('Render wish list component with size medium', () => {
    wishListProps = {
      ...wishProps,
      size: 'medium',
    }
    const wishList = renderer.create(<WistList {...wishListProps} />).toJSON()
    expect(wishList).toMatchSnapshot()
  })

  it('Render wish list component with loading true', () => {
    wishListProps = {
      ...wishProps,
      loading: true,
    }
    const wishList = renderer.create(<WistList {...wishListProps} />).toJSON()
    expect(wishList).toMatchSnapshot()
  })

  it('Render wish list component with error', () => {
    wishListProps = {
      ...wishProps,
      error: {
        graphQLErrors: [{
          message: 'Error!',
        }],
      },
    }
    const wishList = renderer.create(<WistList {...wishListProps} />).toJSON()
    expect(wishList).toMatchSnapshot()
  })

  it('Render wish component with size medium', () => {
    wishProps = {
      ...wishProps,
      size: 'medium',
    }
    const wish = renderer.create(<Item {...wishProps} />).toJSON()
    expect(wish).toMatchSnapshot()
  })

  it('Render wish component with category, cookingType', () => {
    wishProps = {
      ...wishProps,
      categories,
      cookingTypes,
    }
    const wish = renderer.create(<Item {...wishProps} />).toJSON()
    expect(wish).toMatchSnapshot()
  })

  it('Render wish list component with defaultProps', () => {
    wishListProps = {}
    const wishList = renderer.create(<WistList {...wishListProps} />).toJSON()
    expect(wishList).toMatchSnapshot()
  })

  it('Render wish component with defaultProps', () => {
    wishProps = {}
    const wish = renderer.create(<Item {...wishProps} />).toJSON()
    expect(wish).toMatchSnapshot()
  })
})
