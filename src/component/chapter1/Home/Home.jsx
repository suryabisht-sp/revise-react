import React from 'react'
import Counter from '../../chapter2/Counter'
import CounterUserReducer from '../../chapter2/CounterUseReducer'

const Home = () => {
  return (
    <div>Home
      <br/>
      <Counter/>
      <CounterUserReducer/>
    </div>
  )
}

export default Home