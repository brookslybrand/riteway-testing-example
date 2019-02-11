import React from 'react'
import PropTypes from 'prop-types'

const { string, shape, func } = PropTypes

const Hello = ({ helloClass, subject = 'World', actions: { setMode } }) => {
  return (
    <p className={helloClass} onClick={() => setMode('edit')}>
      Hello, {subject}!
    </p>
  )
}

Hello.propTypes = {
  helloClass: string.isRequired,
  subject: string,
  actions: shape({
    setMode: func.isRequired
  })
}

export default Hello
