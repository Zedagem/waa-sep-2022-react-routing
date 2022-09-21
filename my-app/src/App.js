
import { useEffect, useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import {instance} from './index'
import SignupForm from './components/SignupForm';
import ProductList from './components/ProductList';




function App() {
  
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [firstName,setFirstName] = useState("");
  const [productData,setProductData] = useState([]);
  const [loggedIn,setLoggedIn] = useState(false);


 const onClickLogin = ()=>{
   instance.post('/uaa',{
      email:email,
      password:password
    })
    .then(response => {
      if(response.status == 200){
        console.log("success sign in");
        console.log(response.data.accessToken);
        localStorage.setItem('token',JSON.stringify(response.data))
        getProducts();
      }
    })
    .catch(err => console.log("Catch", err.response.status))
    
  }

  const getProducts = async()=>{
    const token = JSON.parse(localStorage.getItem('token'));

    const result = await instance.get("/products",{
      headers:{
        "Authorization":`Bearer ${token.accessToken}`
      }
    })
    .then(response => {
      if(response.status == 200){
        setProductData(response.data) 
        setLoggedIn(true)
      }
    })
    .catch(err => console.log(err))
  }


  const onClickSignup = ()=>{
      instance.post('/uaa/signup',{
        email:email,
        password:password,
        firstname:firstName,
        roles:[
          {
             role:"USER"
          }
          ]
      }).then(response => {
        if(response.status == 200){
          console.log("success signing up");
        }
      }).catch(err => console.log(err))
  }

  function onEmail(email){
    setEmail(email)
  }
  function onPassword(pass){
    setPassword(pass)
  }
  function onFirstName(firstName){
    setFirstName(firstName)
  }

  // const toggle =  

  return (
    <div className="container">
      
      <div className='text-center  '>
        <LoginForm onclick={onClickLogin} onEmail={onEmail} onPassword={onPassword}/>
      </div>
      <div className='text-center mt-5'>
        <SignupForm onclick={onClickSignup} onFirstName ={onFirstName} onEmail={onEmail} onPassword={onPassword} />
      </div>
      <div className='text-center mt-5'>
        {loggedIn ? <ProductList data={productData}/> : <div>no prod</div>}
      </div>
    </div>
  );
}

export default App;
