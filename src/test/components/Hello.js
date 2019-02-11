import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { describe } from 'riteway'
import dom from 'cheerio'

import Hello from 'components/hello'
import createActions from 'test-fixtures/components/hello/create-actions'

const render = ReactDOMServer.renderToStaticMarkup

describe('Hello component', async assert => {
  const noProps = () => {
    const text = '<p>Hello, World!</p>'
    const re = new RegExp(text, 'g')

    const props = {
      actions: createActions()
    }

    const el = <Hello {...props} />
    const $ = dom.load(render(el))
    const output = $.html()

    return re.test(output)
  }

  assert({
    given: 'no parameters',
    should: 'render our hello greeting!',
    expected: true,
    actual: noProps()
  })

  const withProps = () => {
    const text = '<p>Hello, React!</p>'
    const re = new RegExp(text, 'g')

    const props = {
      subject: 'React',
      actions: createActions()
    }

    const el = <Hello {...props} />
    const $ = dom.load(render(el))
    const output = $.html()

    return re.test(output)
  }

  assert({
    given: 'with a subject',
    should: 'render our hello greeting!',
    expected: true,
    actual: withProps()
  })
})
