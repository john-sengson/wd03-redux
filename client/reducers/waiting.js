import {
  SHOW_ERROR,
  REQUEST_COLORS,
  RECEIVE_COLORS,
  REQUEST_THING,
  RECEIVE_THING,
} from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_COLORS:
      return true

    case RECEIVE_COLORS:
      return false

    case REQUEST_THING:
      return true

    case RECEIVE_THING:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
