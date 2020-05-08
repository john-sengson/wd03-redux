import React from 'react'
import { connect } from 'react-redux'

import Thing from './Thing'
import {fetchThing} from '../actions'

function handleClick (color, dispatch) {
  // dispatch the async action
  dispatch(fetchThing(color))
}

const Colors = ({colors, thingSelected, dispatch}) => (
  <>
    <ul>
      {colors.map((color) =>
        <li key={color}>
          <a href="#" onClick={() => handleClick(color, dispatch)}>{color}</a>
        </li>
      )}
    </ul>
    {thingSelected ? <Thing /> : null}
  </>
)

const mapStateToProps = (state) => {
  return {
    colors: state.colors,
    thingSelected: !!state.thing
  }
}

export default connect(mapStateToProps)(Colors)
