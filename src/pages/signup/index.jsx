import React, { useEffect, useState } from 'react'
import { Heading } from '../../components/heading'
import { SubHeading } from '../../components/subheading'
import { InputBox } from '../../components/inputbox'
import { ButtonComponent } from '../../components/button'
import { BottomWarningComponent } from '../../components/bottomwarning'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const navigate = useNavigate();
  const initailUser = {
    firstName : '',
    lastName : '',
    username : '',
    password : ''
  }
  const [user, setUser] = useState(initailUser);

  const handleSignUp = async () => {
    await axios.post("http://localhost:8080/api/v1/user/signup", user)
      .then((response) => {
        localStorage.setItem("token", response.data.jwt);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/dashboard");
      })
  }

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 h-max p-4 text-center">
          <Heading label={"Sign Up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox label={"First Name"} placeholder={"Akarsh"} onChange={(e) => {setUser({...user, firstName:e.target.value})}}/>
          <InputBox label={"Last Name"} placeholder={"T"} onChange={(e) => {setUser({...user, lastName:e.target.value})}}/>
          <InputBox label={"Email"} placeholder={"akarshtkn@gmail.com"} onChange={(e) => {setUser({...user, username:e.target.value})}}/>
          <InputBox label={"Password"} placeholder={"123456789"} onChange={(e) => {setUser({...user, password:e.target.value})}}/>
          <ButtonComponent label={"Sign Up"} onClick={() => handleSignUp()}/>
          <BottomWarningComponent label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
        </div>
      </div>
    </div>
  )
}

export default SignUp