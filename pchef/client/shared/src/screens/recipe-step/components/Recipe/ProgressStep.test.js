// Components
import ProgressStep from './ProgressStep'
import Button from '../../../../components/Button'
import Icon from '../../../../components/Icon'

// Mocks
import { recipes } from '../../../../mocks'

const stepProps = {
  steps: recipes[0].steps,
  step: 1,
  onPressStep: jest.fn(),
  onPressSelectStep: jest.fn(),
}

describe('Recipe by step', () => {
  let progressStep

  beforeEach(() => {
    progressStep = shallow(<ProgressStep {...stepProps} />)
  })

  it('Renders correctly progress steps commponent', () => {
    const progressStepComponent = renderer.create(
      <ProgressStep {...stepProps} />
    ).toJSON
    expect(progressStepComponent).toMatchSnapshot()
  })

  it('Render progress step component with steps array', () => {
    const props = {
      ...stepProps,
      size: 'medium',
    }
    const progressStepComponent = renderer
      .create(<ProgressStep {...props} />)
      .toJSON()
    expect(progressStepComponent).toMatchSnapshot()
  })

  it('Should call onPressStep when press on Button of ProgressStep', () => {
    progressStep.setProps({ size: 'medium' })
    progressStep
      .find(Button)
      .at(0)
      .props()
      .onPress()
    expect(stepProps.onPressStep).toHaveBeenCalled()
  })

  it('Should call onPressSelectStep when press on prev icon', () => {
    progressStep
      .find(Icon)
      .at(0)
      .props()
      .onPress()
    expect(stepProps.onPressSelectStep).toHaveBeenCalled()
  })

  it('Should call onPressSelectStep when press on next icon', () => {
    progressStep
      .find(Icon)
      .at(1)
      .props()
      .onPress()
    expect(stepProps.onPressSelectStep).toHaveBeenCalled()
  })
})
