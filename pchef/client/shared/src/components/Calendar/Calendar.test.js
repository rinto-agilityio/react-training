// Components
import Calendar from '.'

it('renders correctly', () => {
  const calendar = renderer.create(
    <Calendar
      selectedDay="2019-05-15"
      dayRange={{ minDate: '2019-01-01', maxDate: '2019-12-20' }}
      onSelectDay={jest.fn()}
    />,
  ).toJSON()

  expect(calendar).toMatchSnapshot()
})
