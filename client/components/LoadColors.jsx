import React from 'react'
import { connect } from 'react-redux'
import { fetchColors } from '../actions'

const LoadColors = ({children, dispatch}) => (
  <div>
    <button onClick={() => dispatch(fetchColors())}>
      Fetch Colors
    </button>
    {children}
  </div>
)

export default connect()(LoadColors)
