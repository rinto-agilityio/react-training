// Components
import Modal from '.'

describe('Modal', () => {
  let props = {
    dismissBtn: true,
  }

  it('Renders correctly modal commponent', () => {
    const component = renderer.create(<Modal {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })

  it('Render wish list component with size medium', () => {
    props = {
      ...props,
      size: 'medium',
    }
    const component = renderer.create(<Modal {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })

  it('Render wish list component with titel', () => {
    props = {
      ...props,
      title: 'Modal',
    }
    const component = renderer.create(<Modal {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })

  it('Render wish list component with defaultProps function', () => {
    Modal.defaultProps.onSubmit()
    expect(Modal.defaultProps.onSubmit).toBeDefined()
  })

  it('Render wish component with defaultProps function', () => {
    Modal.defaultProps.onDismiss()
    expect(Modal.defaultProps.onDismiss).toBeDefined()
  })
})
