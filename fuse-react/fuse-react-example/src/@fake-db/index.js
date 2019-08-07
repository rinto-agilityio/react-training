import mock from './mock'
import './db/todo-db'
import './db/auth-db'

mock.onAny().passThrough()
