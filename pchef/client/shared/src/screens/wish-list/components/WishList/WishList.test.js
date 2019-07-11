// Components
import WishList from '.'
import Item from './Item'
import Modal from '../../../../components/Modal'
import Button from '../../../../components/Button'

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
    const wishList = renderer.create(<WishList {...wishListProps} />).toJSON()
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
    const wishList = renderer.create(<WishList {...wishListProps} />).toJSON()
    expect(wishList).toMatchSnapshot()
  })

  it('Render wish list component with loading true', () => {
    wishListProps = {
      ...wishProps,
      loading: true,
    }
    const wishList = renderer.create(<WishList {...wishListProps} />).toJSON()
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
    const wishList = renderer.create(<WishList {...wishListProps} />).toJSON()
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
    const wishList = renderer.create(<WishList {...wishListProps} />).toJSON()
    expect(wishList).toMatchSnapshot()
  })

  it('Render wish component with defaultProps', () => {
    wishProps = {}
    const wish = renderer.create(<Item {...wishProps} />).toJSON()
    expect(wish).toMatchSnapshot()
  })

  it('Navigate to Login page when closing modal after getting server error', () => {
    wishListProps = {
      ...wishProps,
      error: {
        graphQLErrors: [{
          message: 'Error!',
        }],
      },
      handleRedirectLogin: jest.fn(),
    }
    const WishlistComponent = shallow(<WishList {...wishListProps} />)
    const ModalComponent = WishlistComponent.find(Modal).props()
    ModalComponent.onDismiss()
    expect(wishListProps.handleRedirectLogin).toHaveBeenCalled()
  })

  it('Navigate to Login page when submit modal after getting server error', () => {
    wishListProps = {
      ...wishProps,
      error: {
        graphQLErrors: [{
          message: 'Error!',
        }],
      },
      handleRedirectLogin: jest.fn(),
    }
    const WishlistComponent = shallow(<WishList {...wishListProps} />)
    const ModalComponent = WishlistComponent.find(Modal).props()
    ModalComponent.onSubmit()
    expect(wishListProps.handleRedirectLogin).toHaveBeenCalled()
  })

  it('Navigate to Wishlist Form', () => {
    wishListProps = {
      ...wishProps,
      handleRedirectWishlistForm: jest.fn(),
    }
    const WishlistComponent = shallow(<WishList {...wishListProps} />)
    const ButtonComponent = WishlistComponent.find(Button).props()
    ButtonComponent.onPress()
    expect(wishListProps.handleRedirectWishlistForm).toHaveBeenCalled()
  })
})
