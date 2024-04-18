import { useState } from "react";
export default function Statesdemo () {
    const [total, setTotal]=useState(0);
    function AddToCart(){
        setTotal(total+1)
    }

    function DeleteFromCart(){
        setTotal(total-1)
    }

    return(

        <div>
            <h1>Added to cart: {total}</h1>
            <button onClick={AddToCart}>Add to Cart</button>
            <button onClick={DeleteFromCart}>Delete from Cart</button>
        
        </div>
    )
}