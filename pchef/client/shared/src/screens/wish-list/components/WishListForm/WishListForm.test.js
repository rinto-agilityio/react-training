// Components
import WistListForm from '.'

describe('Wish list', () => {
  let props
  const component = shallow(<WistListForm />)

  it('Renders correctly wish list form commponent', () => {
    const wishList = renderer.create(<WistListForm />).toJSON()
    expect(wishList).toMatchSnapshot()
  })

  it('Render wish list form component with size medium', () => {
    props = {
      size: 'medium',
    }
    const wishList = renderer.create(<WistListForm {...props} />).toJSON()
    expect(wishList).toMatchSnapshot()
  })

  it('Should show/hide modal calendar when press select date/done button', () => {
    const icon = component.find('Icon')

    // Press select date icon to show modal
    const selectDateIcon = icon.first()
    selectDateIcon.props().onPress()
    expect(component.find('Modal').props().visible).toEqual(true)

    component.find('Modal').props().onSubmit()
    expect(component.find('Modal').exists()).toEqual(false)
  })

  it('Should hide modal calendar when press dialog', () => {
    const icon = component.find('Icon')

    // Press select date icon to show modal
    const selectDateIcon = icon.first()
    selectDateIcon.props().onPress()
    const modal = component.find('Modal')
    modal.props().onDismiss()
    expect(component.find('Modal').exists()).toEqual(false)
  })

  it('Should update selected date when press on calendar', () => {
    const icon = component.find('Icon')

    // Press select date icon to show modal
    const selectDateIcon = icon.first()
    selectDateIcon.props().onPress()

    const calendarProps = component.find('CalendarComponent').props()
    calendarProps.onSelectDay({
      dateString: '2019-05-18',
    })

    expect(component.find('CalendarComponent')).toMatchSnapshot()
  })

  it('Should show categories form', () => {
    const icon = component.find('Icon')
    expect(component.find('Apollo(Classify)').exists()).toEqual(false)
    icon.at(1).props().onPress()
    expect(component.find('Apollo(Classify)').exists()).toEqual(true)

    // Submit Categories form
    const cookingTypesProps = component.find('Apollo(Classify)').props()
    cookingTypesProps.handleSubmit({
      id: '1',
      name: 'test',
    })
    expect(component.find('Apollo(Classify)').exists()).toEqual(false)
  })

  it('Should show cooking types form', () => {
    const icon = component.find('Icon')
    expect(component.find('Apollo(Classify)').exists()).toEqual(false)
    icon.at(2).props().onPress()
    expect(component.find('Apollo(Classify)').exists()).toEqual(true)

    // Submit Cooking types form
    const cookingTypesProps = component.find('Apollo(Classify)').props()
    cookingTypesProps.handleSubmit({
      id: '1',
      name: 'test',
    })
    expect(component.find('Apollo(Classify)').exists()).toEqual(false)
  })

  it('Should hide categories form', () => {
    const icon = component.find('Icon')
    icon.at(1).props().onPress()
    component.find('Apollo(Classify)').props().onDismiss()
    expect(component.find('Apollo(Classify)').exists()).toEqual(false)
  })

  it('Should hide cooking types form', () => {
    const icon = component.find('Icon')
    icon.at(2).props().onPress()
    component.find('Apollo(Classify)').props().onDismiss()
    expect(component.find('Apollo(Classify)').exists()).toEqual(false)
  })
})
