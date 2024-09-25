import React from 'react'
import Counter from '../../component/chapter1/Counter'
import CounterUserReducer from '../../component/chapter2/CounterUseReducer'

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