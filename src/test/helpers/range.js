import { describe, Try } from 'riteway'

import { range } from '../../helpers/range'

describe('range()', async assert => {
  assert({
    given: 'no arguments',
    should: 'return an empty array',
    actual: range(),
    expected: []
  })

  assert({
    given: '1 argument (10)',
    should: 'return an array of numbers from 0 to 9',
    actual: range(10),
    expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  })

  assert({
    given: '2 arguments (1, 10)',
    should: 'return an array of numbers from 1 to 9',
    actual: range(1, 10),
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  })

  assert({
    given: '3 arguments (1, 10, 2)',
    should: 'return an array of numbers from 1 to 9, with steps of size 2',
    actual: range(1, 10, 2),
    expected: [1, 3, 5, 7, 9]
  })

  assert({
    given: '2 arguments with negative values (1, -1)',
    should: 'returns an empty array',
    actual: range(1, -1),
    expected: []
  })

  assert({
    given: '3 arguments with negative values (5, -5, -3)',
    should: 'return an array of numbers from 5 to -6, with steps of size -3',
    actual: range(5, -5, -3),
    expected: [5, 2, -1, -4]
  })

  assert({
    given: 'non numeric argument',
    should: 'throw TypeError',
    actual: Try(range, 1, 'a', 2),
    expected: new TypeError('All values must be integers')
  })

  assert({
    given: 'non integer argument',
    should: 'throw TypeError',
    actual: Try(range, 1, 10, 0.1),
    expected: new TypeError('All values must be integers')
  })
})
