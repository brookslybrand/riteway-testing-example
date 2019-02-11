import React, { useReducer } from 'react'

import Title from 'components/Title'
import Hello from 'components/Hello'

import helloReducer from 'store/reducers/hello'

const App = ({ foo, ...props }) => {
  // create the reducer
  // calling the function gets the default props
  const [state, dispatch] = useReducer(helloReducer, helloReducer())

  // generate the hello props
  const helloProps = {
    ...props,
    actions: {
      setMode: mode => dispatch({ type: 'SET_MODE', mode })
    }
  }

  // show the state updating
  console.log(state)

  return (
    <div className="content">
      <Title {...props} />
      <Hello {...helloProps} />
      <p>Content goes here: {foo}</p>
    </div>
  )
}

export default App
