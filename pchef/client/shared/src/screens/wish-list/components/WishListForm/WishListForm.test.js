// Components
import WistListForm from '.'
import Categories from '../../../recipe/containers/RecipeForm/Categories'
import CookingTypes from '../../../recipe/containers/RecipeForm/CookingType'
import Icon from '../../../../components/Icon'
import CalendarComponent from '../../../../components/Calendar'
import Modal from '../../../../components/Modal'
import Error from '../../../../components/Error'
import Button from '../../../../components/Button'

// Mocks
import { recipes } from '../../../../mocks'

describe('Wish list', () => {
  let props = {
    recipes,
  }
  const component = shallow(<WistListForm {...props} />)

  it('Renders correctly wish list form component', () => {
    const wishList = renderer.create(<WistListForm />).toJSON()
    expect(wishList).toMatchSnapshot()
  })

  it('Render wish list form component with size medium', () => {
    props = {
      size: 'medium',
      recipes,
    }
    const wishList = renderer.create(<WistListForm {...props} />).toJSON()
    expect(wishList).toMatchSnapshot()
  })

  it('Should show/hide modal calendar when press select date/done button', () => {
    const icon = component.find(Icon)

    // Press select date icon to show modal
    const selectDateIcon = icon.first()
    selectDateIcon.props().onPress()
    expect(component.find(Modal).props().visible).toEqual(true)

    component
      .find(Modal)
      .props()
      .onSubmit()
    expect(component.find(Modal).exists()).toEqual(false)
  })

  it('Should hide modal calendar when press dialog', () => {
    const icon = component.find(Icon)

    // Press select date icon to show modal
    const selectDateIcon = icon.first()
    selectDateIcon.props().onPress()
    const modal = component.find(Modal)
    modal.props().onDismiss()
    expect(component.find(Modal).exists()).toEqual(false)
  })

  it('Should update selected date when press on calendar', () => {
    const icon = component.find(Icon)

    // Press select date icon to show modal
    const selectDateIcon = icon.first()
    selectDateIcon.props().onPress()

    const calendarProps = component.find(CalendarComponent).props()
    calendarProps.onSelectDay({
      dateString: '2019-05-18',
    })

    expect(component.find(CalendarComponent)).toMatchSnapshot()
  })

  it('Should show categories form', () => {
    const icon = component.find(Icon)
    expect(component.find(Categories).exists()).toEqual(false)
    icon
      .at(1)
      .props()
      .onPress()
    expect(component.find(Categories).exists()).toEqual(true)

    // Submit Categories form
    const categoryProps = component.find(Categories).props()
    categoryProps.handleSubmit({
      id: '1',
      name: 'test',
    })
    expect(component.find(Categories).exists()).toEqual(false)
  })

  it('Should show cooking types form', () => {
    const icon = component.find(Icon)
    expect(component.find(CookingTypes).exists()).toEqual(false)
    icon
      .at(2)
      .props()
      .onPress()
    expect(component.find(CookingTypes).exists()).toEqual(true)

    // Submit Cooking types form
    const cookingTypesProps = component.find(CookingTypes).props()
    cookingTypesProps.handleSubmit({
      id: '1',
      name: 'test',
    })
    expect(component.find(CookingTypes).exists()).toEqual(false)
  })

  it('Should hide categories form', () => {
    const icon = component.find(Icon)
    icon
      .at(1)
      .props()
      .onPress()
    component
      .find(Categories)
      .props()
      .onDismiss()
    expect(component.find(Categories).exists()).toEqual(false)
  })

  it('Should hide cooking types form', async () => {
    const icon = component.find(Icon)
    icon
      .at(2)
      .props()
      .onPress()

    component
      .find(CookingTypes)
      .props()
      .onDismiss()
    expect(component.find(CookingTypes).exists()).toEqual(false)
  })

  it('Error displays when submiting form without selecting any items', () => {
    const ButtonProps = component.find(Button).props()
    expect(component.find(Button).exists()).toEqual(true)
    ButtonProps.onPress()
    expect(component.find(Error).exists()).toEqual(true)
  })
})
