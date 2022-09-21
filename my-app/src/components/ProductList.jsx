import { useEffect, useState } from "react";
import Product from "./Product";
import { instance } from "../index";
import { useNavigate } from "react-router-dom";


export default function(props){

    const [productData,setProductData] = useState([]);
    const navigator = useNavigate();

    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem('token'))
        instance.get('/products',{
            headers:{
                "Authorization":`Bearer ${token ? token.accessToken : ''}`
            }
        }).then(response => setProductData(response.data))
        .catch(err=>{
            console.log(err)
            navigator('/')

        })
    },[])
    return(
        <div>
           {productData.map(obj => <Product key={obj.id} id={obj.id} name={obj.name} price={obj.price} email={obj.user.email} firstname={obj.user.firstname} />)}
        </div>
    )
}