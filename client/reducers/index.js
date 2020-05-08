import {combineReducers} from 'redux'

import errorMessage from './error-message'
import waiting from './waiting'
import colors from './colors'
import thing from './thing'

export default combineReducers({
  errorMessage,
  waiting,
  colors,
  thing
})
