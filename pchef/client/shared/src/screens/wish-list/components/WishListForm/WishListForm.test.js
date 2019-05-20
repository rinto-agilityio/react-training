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
    expect(component.find('withTheme(Dialog)').props().visible).toEqual(true)

    button.at(1).props().onPress()
    expect(component.find('withTheme(Dialog)').props().visible).toEqual(false)
  })

  it('Should hide modal calendar when press dialog', () => {
    const button = component.find('Button')

    // Press select date button to show modal
    const selectDateBtn = button.first()
    selectDateBtn.props().onPress()
    component.find('withTheme(Dialog)').props().onDismiss()
    expect(component.find('withTheme(Dialog)').props().visible).toEqual(false)
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
