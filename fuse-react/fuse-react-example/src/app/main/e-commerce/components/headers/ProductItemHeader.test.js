// Libs
import React from 'react'

// Components
import ProductItemHeader from './ProductItemHeader'

const props = {
  canBeSubmitted: jest.fn(),
  submitSaveProduct: jest.fn(),
  form: {
    categories: [],
    name: '',
    images: [],
    featuredImageId: 0,
  },
}

describe('ProductItemHeader Component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ProductItemHeader {...props} />)

    expect(component).toMatchSnapshot()
  })
})
