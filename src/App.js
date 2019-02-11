import React, { useReducer } from 'react'

import Title from './components/Title'
import Hello from './components/Hello'

const assign = Object.assign

const reducer = (
  state = { mode: 'display', subject: 'World' },
  { mode, subject, type } = {}
) => {
  switch (type) {
    case 'SET_MODE':
      return assign({}, state, {
        mode
      })
    case 'SET_SUBJECT':
      return assign({}, state, {
        subject
      })
    default:
      return state
  }
}

const Foo = ({ foo, ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    mode: 'display',
    subject: 'World'
  })

  const setMode = mode => dispatch({ type: 'SET_MODE', mode })

  const helloProps = {
    ...props,
    actions: {
      setMode
    }
  }

  return (
    <div className="content">
      <Title {...props} />
      <Hello {...helloProps} />
      <p>Content goes here: {foo}</p>
    </div>
  )
}

export default Foo
