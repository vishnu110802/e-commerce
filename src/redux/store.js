import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducer/cart'
export default configureStore({
    reducer:{
        cart: cartReducer
    }

    
})