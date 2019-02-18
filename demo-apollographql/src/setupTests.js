import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import fetch from 'node-fetch'

configure({ adapter: new Adapter() })

global.fetch = fetch
global.window = global
global.Headers = fetch.Headers
global.Request = fetch.Request
global.Response = fetch.Response
global.location = { hostname: '' }
