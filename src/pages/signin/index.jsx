import React, { useState } from 'react'
import { Heading } from '../../components/heading'
import { SubHeading } from '../../components/subheading'
import { InputBox } from '../../components/inputbox'
import { ButtonComponent } from '../../components/button'
import { BottomWarningComponent } from '../../components/bottomwarning'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SignIn() {
  const navigate = useNavigate();
  const initialUser = {
    username : '',
    password : ''
  }
  const [user, setUser] = useState(initialUser);

  const handleSignIn = async () => {
    await axios.post("http://localhost:8080/api/v1/user/signin", user)
      .then((response) => {
        localStorage.setItem("jwt", response.data.jwt)
        localStorage.setItem("user", JSON.stringify(response.data.user))
        navigate("/dashboard")
      })
  }

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 h-max p-4 text-center">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox label={"Email"} placeholder={"akarshtkn@gmail.com"} onChange={(e) => setUser({...user, username:e.target.value})}/>
          <InputBox label={"Password"} placeholder={""} onChange={(e) => setUser({...user, password:e.target.value})}/>
          <ButtonComponent label={"Sign In"} 
          onClick={() => handleSignIn()}/>
          <BottomWarningComponent label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"} />
        </div>
      </div>
    </div>
  )
}

export default SignIn