import React,{createContext, useState} from "react";
import all_product from '../Components/Assets/all_product';

export const ShopContext=createContext(null)

const getDefaultCart=()=>{
    let cart={}
    for(let index=0;index<all_product.length+1;index++){
        cart[index]=0
    }
    return cart
}

const ShopContextProvider=(props)=>{
    
    // using contextvalue we can access the variables & data in all_product ,cartitems in any component
    const[cartItems,setCartItems] =useState(getDefaultCart())
   
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    //  to find the total price of all items in the cart
    const getTotalCartAmount=()=>{
        let totalAmount=0
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price*cartItems[item]
            }
            
        }
        return totalAmount
    }

    // To display the number of items added to the cart
    const getTotalCartItems=()=>{
        let totalItem=0
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item]
            }
        }
        return totalItem
    }

    const contextValue={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart}
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider