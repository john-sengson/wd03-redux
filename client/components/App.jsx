import React from 'react'

import WaitIndicator from './WaitIndicator'
import ErrorMessage from './ErrorMessage'
import LoadColors from './LoadColors'
import Colors from './Colors'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <LoadColors>
      <WaitIndicator />
    </LoadColors>
    <Colors />
  </div>
)

export default App
