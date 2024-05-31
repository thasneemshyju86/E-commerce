import React,{createContext} from "react";
import all_product from '../Components/Assets/all_product';

export const ShopContext=createContext(null)

const ShopContextProvider=(props)=>{
    // using contextvalue we can access the variables & data in all_product
    const contextValue={all_product}
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider