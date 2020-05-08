import nock from 'nock'

import * as actions from '../../client/actions'

test('fetchColors', () => {
  const scope = nock('http://localhost')
    .get('/api/v1/colors')
    .reply(200, ['test1', 'test2', 'test3'])

  const dispatch = jest.fn()

  return actions.fetchColors()(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(2)
      expect(dispatch.mock.calls[0][0].type).toBe('REQUEST_COLORS')
      expect(dispatch.mock.calls[1][0].type).toBe('RECEIVE_COLORS')
      scope.done()
    })
})
