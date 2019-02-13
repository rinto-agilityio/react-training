import React from 'react'
import { shallow } from 'enzyme'

// Components
import ListAuthor from './index'
import { StyledCard } from './ListAuthor.style'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'

// Data mock
const mockData = [
  {
    "id": 1,
    "name": "Jake Prins",
    "photo": "https://cdn-images-1.medium.com/fit/c/100/100/1*_SiS1xvFOqiK6TnkiGcZ2A.jpeg",
    "desc": "Maker of things"
  },
  {
    "id": 2,
    "name": "Dan Abramov",
    "photo": "https://miro.medium.com/fit/c/240/240/1*Vko_9kRNbjQGCqyBM9OnVw.jpeg",
    "desc": "Working on @reactjs. Co-author of Redux and Create React App. Building tools for humans."
  }
]

const componentTitle = 'Top Authors'

describe('Components', () => {
  describe('<ListAuthor />', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<ListAuthor authors={mockData} />)
    })

    it('Render correct title', () => {
      expect(wrapper.find(Typography).render().text()).toEqual(componentTitle)
    })

    it('Render correct child elements: Title and List', () => {
      expect(wrapper.find(StyledCard).children().length).toEqual(2)
    })

    it(`Render correct items length: ${mockData.length}`, () => {
      expect(wrapper.find(ListItem).length).toEqual(mockData.length)
    })
  })
})
