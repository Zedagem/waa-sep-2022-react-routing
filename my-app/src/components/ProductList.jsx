import Product from "./Product";
export default function(props){
    return(
        <div>
           {props.data.map(obj => <Product key={obj.id} id={obj.id} name={obj.name} price={obj.price} email={obj.user.email} firstname={obj.user.firstname} />)}
        </div>
    )
}