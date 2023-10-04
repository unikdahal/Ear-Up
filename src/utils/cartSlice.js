import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addItem: (state,action)=>{
            //Mutating the state
            state.cartItems.push(action.payload);
        },
        removeItem: (state)=>{
            state.cartItems.pop();
        },
        clearCart: (state)=>{
            state.cartItems.length=0; // []
            // You can also return a new state return {items: []}; this will also work
            // state.cartItems = [] won't work because we need to mutate the state but the above will only be giving reference of a new array
        }
    }
});


export const {addItem,removeItem,clearCart}= cartSlice.actions;
export default cartSlice.reducer;