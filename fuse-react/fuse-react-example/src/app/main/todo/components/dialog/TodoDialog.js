import React, { memo } from 'react'
import { Dialog } from '@material-ui/core'
import TodoAppBar from './TodoAppBar'
import TodoDialogContent from './TodoDialogContent'

const TodoDialog = ({
  todoDialog,
  labels,
  closeEditTodoDialog,
  closeNewTodoDialog,
  addTodo,
  updateTodo,
}) => {
  const closeTodoDialog = () => {
    todoDialog.type === 'edit' ? closeEditTodoDialog() : closeNewTodoDialog()
  }

  return (
    <Dialog
      {...todoDialog.props}
      onClose={closeTodoDialog}
      fullWidth
      maxWidth="sm"
    >
      <TodoAppBar type={todoDialog.type} />
      <TodoDialogContent
        labels={labels}
        todoDialog={todoDialog}
        addTodo={addTodo}
        closeTodoDialog={closeTodoDialog}
        updateTodo={updateTodo}
      />
    </Dialog>
  )
}

export default memo(TodoDialog)
