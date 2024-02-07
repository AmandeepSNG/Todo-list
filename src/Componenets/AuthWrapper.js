import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function AuthWrapper (props) {
  const [showSignUp, setShowSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [userInfo, setUserInfo] = useState(null)
  const [errorField, setErrorfield] = useState(null)
  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleOnInputchange = (event) => {
    // console.log('---- event.target.name ----', event.target.name)
    if (event.target.name === 'emailAddress') {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (event.target.value.match(regex)) {
        setUserInfo({ ...userInfo, email: event.target.value })
        setErrorfield({ email: null, ...errorField })
        debugger
      } else {
        setErrorfield({ email: "Please Add a valid email", ...errorField })
        setTimeout(() => {
          setErrorfield({ email: null, ...errorField })
          debugger
        }, 1000)
        debugger
      }
    }
    if (event.target.name === 'password') {
      const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      if (event.target.value.match(regex)) {
        setUserInfo({ ...userInfo, password: event.target.value })
        setErrorfield({ password: null, ...errorField })
      } else {
        setErrorfield({ password: "Please Add a valid Password", ...errorField })
        setTimeout(() => {
          setErrorfield({ password: null, ...errorField })
        }, 1000)
      }
    }
  }
  const handleOnSubmit = (event) => {

  }
  const hanldeShowSignUpClick = () => {
    setShowSignUp(!showSignUp)
  }
  return (
    <div className='TodoWrapper'>
      <h1>{!showSignUp ? "Login to continue" : "Create Your Account"}</h1>
      <form className="TodoForm" onSubmit={(e) => handleOnSubmit(e)}>
        <div className='Input-fields'>
          <input type="text" onChange={(e) => handleOnInputchange(e)} className={`form-input ${errorField?.email ? 'shake' : ''}`} placeholder='Email Address' name='emailAddress' />
          <input type={showPassword ? "text" : "password"} onChange={(e) => handleOnInputchange(e)} className={`form-input ${errorField?.password ? 'shake' : ''}`} placeholder='Password' name='password' />
          <span><FontAwesomeIcon onClick={(e) => toggleShowPassword()} icon={showPassword ? faEyeSlash : faEye} /></span>
          <p onClick={(e) => hanldeShowSignUpClick()} style={{ "textAlign": "right", "color": "#98cfff", "marginTop": "5px", "cursor": "pointer", "textDecoration": "underline" }}>Don't Have Account</p>
        </div>
        <div className='submit-button'>
          <button type="submit" className='submit-btn'>{showSignUp ? "Sign Up" : "Login"}</button>
        </div>
      </form>

    </div>
  )
}

export default AuthWrapper