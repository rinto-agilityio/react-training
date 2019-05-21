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
    const button = component.find('Button')

    // Press select date button to show modal
    const selectDateBtn = button.first()
    selectDateBtn.props().onPress()
    expect(component.find('Modal').props().visible).toEqual(true)

    component.find('Modal').props().onSubmit()
    expect(component.find('Modal').exists()).toEqual(false)
  })

  it('Should hide modal calendar when press dialog', () => {
    const button = component.find('Button')

    // Press select date button to show modal
    const selectDateBtn = button.first()
    selectDateBtn.props().onPress()
    const modal = component.find('Modal')
    modal.props().onDismiss()
    expect(component.find('Modal').exists()).toEqual(false)
  })

  it('Should update selected date when press on calendar', () => {
    const button = component.find('Button')

    // Press select date button to show modal
    const selectDateBtn = button.first()
    selectDateBtn.props().onPress()

    const calendarProps = component.find('CalendarComponent').props()
    calendarProps.onSelectDay({
      dateString: '2019-05-18',
    })

    expect(component.find('CalendarComponent')).toMatchSnapshot()
  })
})
