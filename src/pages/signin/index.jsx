import React from 'react'
import { Heading } from '../../components/heading'
import { SubHeading } from '../../components/subheading'
import { InputBox } from '../../components/inputbox'
import { ButtonComponent } from '../../components/button'
import { BottomWarningComponent } from '../../components/bottomwarning'

function SignIn() {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 h-max p-4 text-center">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox label={"Email"} placeholder={"akarshtkn@gmail.com"} />
          <InputBox label={"Password"} placeholder={""} />
          <ButtonComponent label={"Sign In"} />
          <BottomWarningComponent label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"} />
        </div>
      </div>
    </div>
  )
}

export default SignIn