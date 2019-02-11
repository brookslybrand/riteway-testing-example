import React from 'react'
import ReactDOMServer from 'react-dom/server'
import test from 'tape'
import dom from 'cheerio'
import { describe } from 'riteway'

import App from '../App'

const render = ReactDOMServer.renderToStaticMarkup

const createActions = actions => {
  return Object.assign(
    {},
    {
      setWord() {},
      setMode() {}
    },
    actions
  )
}

describe('App.js with RITEway', async assert => {
  const should = 'Should render all sections.'

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
