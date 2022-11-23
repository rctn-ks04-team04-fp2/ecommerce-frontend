import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            const newCart = action.payload;
            let exist = false;
            state.carts.forEach((item) => {
                if (item.username === newCart.username) {
                    exist = true;
                }
            })
            if (!exist) {
                state.carts.push(newCart);
            }
        },
        addQuantity: (state, action) => {
            const {username, id, quantity} = action.payload;

            state.carts.forEach((item) => {
                if (item.username === username) {
                    item.cart.forEach((prod) => {
                        if (prod.id === id) {
                            prod.quantity += quantity;
                        }
                    });
                }
            });
        },
        addItemToCart: (state, action) => {
            const {username, id} = action.payload;

            const newItem = {
                id: id,
                quantity: 1
            }

            state.carts.forEach((item) => {
                if (item.username === username) {
                    item.cart.push(newItem);
                }
            });
        }
    },
    
});

export const { addCart, addQuantity, addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;