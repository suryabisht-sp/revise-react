import React, { useRef, useState } from 'react'
import "./styles.css"

const Counter = () => {
 const [increment, setIncement]=useState(0)
 const [isFocused, setIsFocused] = useState(false);

 const handleIncrease=()=>{
  setIncement(increment + 1)
 }

 const handleDecrease=()=>{
    if(increment>0){
    setIncement(increment - 1)
 }}

 const inputRef = useRef()

 const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.value = "This is so Quick";
      inputRef.current.focus();
    }
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
    return (
   <div className="content-box">
   <div className='main-box'>
   <h1> useState Hook</h1>
   <span>{increment}</span>
   <button onClick={()=>{handleIncrease()}}>Increase</button>
   <button onClick={()=>{handleDecrease()}}>Decrease</button>
   <button onClick={() => setIncement(0)}>Reset</button>
   </div>
   <div className='main-box'>

    <h2>
        Used case of useRef hook
    </h2>
    <label> 
       Click on the action button to  
       Focus and populate the text. 
      </label><br/> 
    <button onClick={()=>{handleFocus()}}>Focus</button>
    <input ref={inputRef}   className={`input-field ${isFocused ? 'focused' : ''}`}
        onFocus={handleFocus}
        onBlur={handleBlur}/>
   </div>
   
   </div>
  )
}

export default Counter