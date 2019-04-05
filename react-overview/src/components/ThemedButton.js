import React from 'react'

import { ContextWrapper } from '../contexts/ContextWrapper'

const ThemedButton = context => (
  <button
    onClick={context.toggleTheme}
    style={{
      backgroundColor: context.theme.background,
      width: '100px',
      height: '40px',
      color: context.theme.foreground
    }}
  >
    Toggle Button
  </button>
)

//using HOC
export default ContextWrapper(ThemedButton);
