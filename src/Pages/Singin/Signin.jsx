import React from 'react'
import "./SignIn.css"
import Logo from '../../component/Header/Logo/Logo'

const Signin = () => {
  return (
<>
<div className='login-container'>
 
<div className='left-image'>

</div>

<div className='right-part'>
<div className='right-wrapper'>
    <div className='logo'><Logo/></div>
<form>
  <input type='text' placeholder='Email Address'/>
  <input type='password' placeholder='Password'/>
  <button className='btn button'>Login</button>
</form>
<div>
  <span>Forget Password?</span>
  <br/>
  <span>Signup</span>
</div>
</div>
</div>
</div>

</>  )
}

export default Signin