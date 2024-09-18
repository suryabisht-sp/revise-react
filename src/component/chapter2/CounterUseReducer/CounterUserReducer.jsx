import React, { useEffect, useMemo, useReducer, useRef, useState } from 'react'
import "../../chapter1/Counter/styles.css"
import CallBacks from '../../Chapter3/Callbacks/CallBacks';


// Reducer function for managing both counter and input state
const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, count: state.count + 1 };
    case 'subtract':
      return { ...state, count: state.count > 0 ? state.count - 1 : state.count };
    case 'reset':
      return { ...state, count: 0 };
    case 'focus':
      return { ...state, inputValue: 'This is so Quick', isFocused: true };
    case 'blur':
      return { ...state, isFocused: false };
    default:
      throw new Error('Unexpected action type');
  }
};

const CounterUserReducer = () => {
  // Initial state for both counter and input
  const initialState = { count: 0, inputValue: '', isFocused: false };
  const [state, dispatch] = useReducer(reducer, initialState);

  // Ref for input field
  const inputRef = useRef(null);

  // Handle focus action and update input field
  const handleFocus = () => {
    dispatch({ type: 'focus' });
    if (inputRef.current) {
      inputRef.current.value = state.inputValue;
      inputRef.current.focus();
    }
  };

  const [count , setCount]=useState(0)
  const [hits, setHit]=useState(0)

  const handleIncrease=()=>{
    setHit(count +1)
  }

  const handleDecrease=()=>{
    if(count>0){
        setHit(count -1)
    }
  }

  useEffect(()=>{
    setCount(hits)
  },[hits])



  // for use memo hook

  const [number, setNumber] = useState(0);
  const squaredNum = useMemo(() => {
    return squareNum(number);
}, [number]);


  function squareNum(number) {
    console.log("Squaring will be done!");
    return Math.pow(number, 2);
  }

  const onChangeHandler = (e) => {
    setNumber(e.target.value);
}; 

return (
    <div>
      <div className='main-box'>
        <h1>useReducer Hook</h1>
        <span>{state.count}</span>
        <button onClick={() => dispatch({ type: 'add' })}>Increase</button>
        <button onClick={() => dispatch({ type: 'subtract' })}>Decrease</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>  
      <div className='main-box'>
        <h2>Used case of useRef hook</h2>
        <label>
          Click on the action button to focus and populate the text.
        </label><br/>
        <button onClick={handleFocus}>Focus</button>
        <input
          ref={inputRef}
          className='input-field'
        />
      </div>
      <div className='content-box'>
      <div className='main-box'>
        <h1>useEffect Hook</h1>
        <span>{count}</span>
        <button onClick={()=>{handleIncrease()}}>+</button>
        <button onClick={()=>{handleDecrease()}} disabled={count === 0}  className={count === 0 ? 'disabled-button' : ''}>-</button>
        <button onClick={() => setCount(0)}>Clear</button>
      </div>
      </div>
      <div>
      <h1>useMemo Hook</h1>
      <label>Enter the number to get its square value</label>
      <br/>
      <br/>
            <input
                type="number"
                placeholder="Enter a number"
                value={number}
                onChange={onChangeHandler}
            ></input>
<br/>
<br/>
            <div>Squared Value: {squaredNum}</div>


      </div>
      <CallBacks/>
    </div>
  );
};

export default CounterUserReducer;
