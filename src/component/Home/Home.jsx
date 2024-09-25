import React from 'react'
import Counter from '../chapter1/Counter'
import CounterUserReducer from '../chapter2/CounterUseReducer'

const Home = () => {
  return (
    <div>
      <br/>
      <Counter/>
      <CounterUserReducer/>
    </div>
  )
}

export default Home