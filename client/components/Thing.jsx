import React from 'react'
import {connect} from 'react-redux'

function Thing (props) {
  const {name, color, isOrganic} = props
  return (
    <div className="thing">
      <h2>Selected Thing</h2>
      <div>Name: {name}</div>
      <div>Color: {color}</div>
    </div>
  )
}

function mapStateToProps (state) {
  const {name, color, isOrganic} = state.thing || {}
  return { name, color, isOrganic }
}

export default connect(mapStateToProps)(Thing)