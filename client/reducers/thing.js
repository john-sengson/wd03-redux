import { RECEIVE_THING } from '../actions'

function thingReducer (state = null, action) {
  switch(action.type) {
    case RECEIVE_THING:
      return action.thing
    default:
      return state
  }
}

export default thingReducer