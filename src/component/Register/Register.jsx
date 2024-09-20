import React from 'react'
import "./Register.css"
const Register = () => {
  return (
    <div className="container1">
    <div className="left-section">
        <h1>Register Now</h1>
        <p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It's exciting to think about setting up your own viewing station.</p>
        <div className="timer">
            <div className="timer-box">
                <div className="timer-value">150</div>
                <div className="timer-label">Days</div>
            </div>
            <div className="timer-box">
                <div className="timer-value">23</div>
                <div className="timer-label">Hours</div>
            </div>
            <div className="timer-box">
                <div className="timer-value">47</div>
                <div className="timer-label">Mins</div>
            </div>
            <div className="timer-box">
                <div className="timer-value">59</div>
                <div className="timer-label">Secs</div>
            </div>
        </div>
    </div>
    <div className="right-section">
        <div className="registration-form">
            <h2>Courses for Free</h2>
            <p>It is high time for learning</p>
            <form>
                <input type="text" placeholder="Your Name" required/>
                <input type="tel" placeholder="Your Phone Number" required/>
                <input type="email" placeholder="Your Email Address" required/>
                <button type="submit" className="submit-btn">SUBMIT</button>
            </form>
        </div>
    </div>
</div>
  )
}

export default Register