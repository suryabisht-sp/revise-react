import React, { useState, useCallback } from "react";
import "../../chapter1/Counter/styles.css"
var funccount = new Set();

const CallBacks = () => {
  const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);
 
    const incrementCounter = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    const decrementCounter = useCallback(() => {
        setCount(count - 1);
    }, [count]);
    const incrementNumber = useCallback(() => {
        setNumber(number + 1);
    }, [number]);
 
    funccount.add(incrementCounter);
    funccount.add(decrementCounter);
    funccount.add(incrementNumber);
    return (
        <div className="content-box">         
            <h2>
               Callback Hook
            </h2>
            <h4>React Example for useCallback Hook</h4>
            <p>Count: {count}</p>
            <p>Function Count: {funccount.size}</p>
            <div className="btn-button">
            <button className="btn" onClick={incrementCounter}>
                Increase counter
            </button>
            <button className="btn"  onClick={decrementCounter}>
                Decrease Counter
            </button>
            <button className="btn"  onClick={incrementNumber}>
                Increase number
            </button>
        </div>
        </div>
    );
};

export default CallBacks