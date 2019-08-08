import mock from './mock'
import './db/todo-db'
import './db/auth-db'
import './db/e-commerce-db'

mock.onAny().passThrough()
