import { RECEIVE_COLORS } from '../actions'

function colors(state = [], action) {
  switch (action.type) {
    case RECEIVE_COLORS:
      return action.colors

    default:
      return state
  }
}

export default colors
