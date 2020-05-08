import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_COLORS = 'RECEIVE_COLORS'
export const REQUEST_COLORS = 'REQUEST_COLORS'
export const REQUEST_THING = 'REQUEST_THING'
export const RECEIVE_THING = 'RECEIVE_THING'

export const requestColors = () => {
  return {
    type: REQUEST_COLORS
  }
}

export const receiveColors = (colors) => {
  return {
    type: RECEIVE_COLORS,
    colors: colors
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchColors () {
  return (dispatch) => {
    dispatch(requestColors())
    return request
      .get('/api/v1/colors')
      .then(res => {
        dispatch(receiveColors(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export const requestThing = () => {
  return {
    type: REQUEST_THING
  }
}

function receiveThing (thing) {
  return {
    type: RECEIVE_THING,
    thing: thing
  }
}

export function fetchThing (color) {
  return (dispatch) => {
    dispatch(requestThing())
    return request
      .get(`/api/v1/things/${color}`)
      .then(res => {
        const thing = res.body
        dispatch(receiveThing(thing))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}