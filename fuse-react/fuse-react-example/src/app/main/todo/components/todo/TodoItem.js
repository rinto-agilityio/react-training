import React, { memo } from 'react'
import {
  withStyles,
  IconButton,
  Icon,
  Typography,
  Checkbox,
  ListItem,
} from '@material-ui/core'
import red from '@material-ui/core/colors/red'
import amber from '@material-ui/core/colors/amber'
import _ from '@lodash'

// components
import TodoChip from '../chip'

import classNames from 'classnames'
import whyDidYouRender from '@welldone-software/why-did-you-render'

if (process.env.NODE_ENV !== 'production') {
  whyDidYouRender(React)
}

const styles = theme => ({
  todoItem: {
    '&.completed': {
      background: 'rgba(0,0,0,0.03)',
      '& .todo-title, & .todo-notes': {
        textDecoration: 'line-through',
      },
    },
  },
})

const TodoItem = ({
  completed,
  title,
  notes,
  important,
  classes,
  starred,
  openEditTodoDialog,
  toggleImportant,
  toggleStarred,
  toggleCompleted,
  todo,
  labels,
  deleteTodo,
}) => {
  const handleClickTodoItem = event => {
    event.preventDefault()
    openEditTodoDialog(todo)
  }

  const handleDeleteTodoItem = event => {
    event.preventDefault()
    event.stopPropagation()
    deleteTodo(todo)
  }

  return (
    <ListItem
      onClick={event => handleClickTodoItem(event)}
      dense
      button
      className={classNames(
        classes.todoItem,
        { completed: completed },
        'border-solid border-b-1 py-16  px-0 sm:px-8'
      )}
    >
      <Checkbox
        tabIndex={-1}
        disableRipple
        checked={completed}
        onChange={() => toggleCompleted(todo)}
        onClick={ev => ev.stopPropagation()}
      />

      <div className="flex flex-1 flex-col relative overflow-hidden pl-8">
        <Typography
          variant="subtitle1"
          className="todo-title truncate"
          color={completed ? 'textSecondary' : 'default'}
        >
          {title}
        </Typography>

        <Typography color="textSecondary" className="todo-notes truncate">
          {_.truncate(notes.replace(/<(?:.|\n)*?>/gm, ''), {
            length: 180,
          })}
        </Typography>

        <div className={classNames(classes.labels, 'flex mt-8')}>
          {todo.labels.map(label => (
            <TodoChip
              className="mr-4"
              title={_.find(labels, { id: label }).title}
              color={_.find(labels, { id: label }).color}
              key={label}
            />
          ))}
        </div>
      </div>

      <div className="px-8">
        <IconButton
          onClick={ev => {
            ev.preventDefault()
            ev.stopPropagation()
            toggleImportant(todo)
          }}
        >
          {important ? (
            <Icon style={{ color: red[500] }}>error</Icon>
          ) : (
            <Icon>error_outline</Icon>
          )}
        </IconButton>
        <IconButton
          onClick={ev => {
            ev.preventDefault()
            ev.stopPropagation()
            toggleStarred(todo)
          }}
        >
          {starred ? (
            <Icon style={{ color: amber[500] }}>star</Icon>
          ) : (
            <Icon>star_outline</Icon>
          )}
        </IconButton>
        <IconButton
          className="min-w-auto"
          onClick={event => handleDeleteTodoItem(event)}
        >
          <Icon>delete</Icon>
        </IconButton>
      </div>
    </ListItem>
  )
}

TodoItem.whyDidYouRender = true

const areEqual = (prevProps, nextProps) => prevProps.labels === nextProps.labels

export default memo(withStyles(styles, { withTheme: true })(TodoItem), areEqual)
