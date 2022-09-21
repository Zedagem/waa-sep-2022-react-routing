import TextField from "./TextField";
import Button from "./Button";
import Header from "./Header";
import { useState } from "react";
import { instance } from "../index";
import { useNavigate } from "react-router-dom";

export default function (props) {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const navigator = useNavigate();

  function onLogin() {
    instance
      .post("/uaa", {
        email: emailState,
        password: passwordState,
      })
      .then((response) => {
        console.log("sucess sign in");
        console.log(response.data);
        const token = JSON.stringify(response.data);
        localStorage.setItem("token",token );
        navigator("/products");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="w-50 mt-5 mx-auto">
      {/* <form className="w-50 mt-5 mx-auto"> */}
      <Header {...{ text: "Please Sign In" }} />
      <TextField
        {...{
          type: "email",
          name: "email",
          text: "Email address",
          id: "emailInput",
          placeholder: "name@example.com",
          onTyped: setEmailState,
        }}
      />
      <br />
      <TextField
        {...{
          type: "password",
          name: "password",
          text: "Password",
          id: "passwordInput",
          placeholder: "Password",
          onTyped: setPasswordState,
        }}
      />
      <Button
        {...{
          type: "submit",
          text: "Sign in",
          classname: "w-100 btn btn-lg btn-primary mt-3",
          onclick: onLogin,
        }}
      />
      {/* </form> */}
    </div>
  );
}
