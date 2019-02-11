import React from 'react'
import ReactDOMServer from 'react-dom/server'
import dom from 'cheerio'
import { describe } from 'riteway'

import App from 'App'
import createActions from 'test-fixtures/components/hello/create-actions'

const render = ReactDOMServer.renderToStaticMarkup

describe('App component', async assert => {
  const props = {
    foo: 'foo',
    helloClass: 'hello',
    titleClass: 'title',
    title: 'Yay!',
    actions: createActions()
  }

  const el = <App {...props} />
  const $ = dom.load(render(el))

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
