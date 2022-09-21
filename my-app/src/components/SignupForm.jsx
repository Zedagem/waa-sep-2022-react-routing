import TextField from "./TextField";
import Button from "./Button";
import Header from "./Header";
import { useState } from "react";
import { instance } from "../index";
import { useNavigate } from "react-router-dom";

export default function (props) {
  const [firstNameState,setFirstNameState] = useState("");
  const [emailState,setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const navigator = useNavigate();

  function onSignup(){
    instance.post('/uaa/signup',{
      email:emailState,
      password:passwordState,
      firstname:firstNameState,
      roles:[
        {
           role:"USER"
        }
        ]
    }).then(response => {
      console.log("success signup ");
      navigator('/')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="w-50 mt-5 mx-auto">
      <Header {...{ text: "Please Sign Up" }} />
      <TextField
        {...{
          type: "text",
          name: "firstName",
          text: "First Name",
          id: "firstName",
          placeholder: "John",
          onTyped:setFirstNameState
        }}
      />
      <br />
      <TextField
        {...{
          type: "email",
          name: "signupEmail",
          text: "Email Address",
          id: "signupEmail",
          placeholder: "name@example.com",
          onTyped:setEmailState
        }}
      />
      <br />
      <TextField
        {...{
          type: "password",
          name: "signuPassword",
          text: "Password",
          id: "signupPassword",
          placeholder: "Password",
          onTyped:setPasswordState
        }}
      />
      <br />
      <Button
          {...{
            text: "Sign up",
            classname: "w-100 btn btn-lg btn-primary mt-3",
            onclick:onSignup
          }}
        />
    </div>
  );
}
