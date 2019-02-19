import React from 'react'
import { describe, renderComponent as render } from 'riteway'

import App from 'App'
import createActions from 'test-fixtures/components/hello/create-actions'

describe('App component', async assert => {
  const props = {
    foo: 'foo',
    helloClass: 'hello',
    titleClass: 'title',
    title: 'Yay!',
    actions: createActions()
  }

  const $ = render(<App {...props} />)

  assert({
    given: `prop foo`,
    should: "have last child with text: '`Content goes here: ${props.foo}`'",
    actual: $('p:last-child').text(),
    expected: `Content goes here: ${props.foo}`
  })

  assert({
    given: `prop helloClass`,
    should: 'have an element with the class ',
    actual: Boolean($(`.${props.helloClass}`).html()),
    expected: true
  })

  assert({
    given: `prop titleClass`,
    should: 'have an element with the class ',
    actual: Boolean($(`.${props.titleClass}`).html()),
    expected: true
  })
})
