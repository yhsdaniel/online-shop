import { createSlice } from '@reduxjs/toolkit'
import { getAllCategory, getUser, getAllProduct, getPerCategory, getDetailProduct, getNameUser } from './api';

export const LoginUser = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        error: null,
        isSuccess: false,
        token: "",
    },
    reducers: {
        logout: (state) => {
            state.token = sessionStorage.clear()
        },
    },
    extraReducers: {
        [getUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [getUser.fulfilled]: (state, { payload: { token, error } }) => {
            state.loading = false
            state.isSuccess = true
            if (error) {
                state.error = error
            } else {
                state.token = token
                sessionStorage.setItem('token', JSON.stringify(token))
            }
        },
        [getUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error
        },
    },
})

export const NameUser = createSlice({
    name: 'nameUser',
    initialState: {
        dataUser: []
    },
    extraReducers: {
        [getNameUser.fulfilled]: (state, action) => {
            state.dataUser = action.payload
        }
    },
})

export const Category = createSlice({
    name: 'category',
    initialState: {
        data: []
    },
    extraReducers: {
        [getAllCategory.fulfilled]: (state, action) => {
            state.data = action.payload
        }
    },
})

export const AllProduct = createSlice({
    name: 'product',
    initialState: {
        data: []
    },
    extraReducers: {
        [getAllProduct.fulfilled]: (state, action) => {
            state.data = action.payload
        }
    },
})

export const perCategory = createSlice({
    name: 'perCategory',
    initialState: {
        dataCategory: []
    },
    extraReducers: {
        [getPerCategory.fulfilled]: (state, action) => {
            state.dataCategory = action.payload
        }
    },
})

export const detailProduct = createSlice({
    name: 'detailProduct',
    initialState: {
        detailProduct: [],
    },
    extraReducers: {
        [getDetailProduct.fulfilled]: (state, action) => {
            state.detailProduct = action.payload
        }
    },
})

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item.id === action.payload);
            if (itemInCart) {
                itemInCart.quantity += action.payload.quantity
            } else {
                state.cart.push({ 
                    ...action.payload,
                    quantity: 1
                });
            }
        },
        incrementQuantity: (state, action) => {
            state.cart.map((item) => {
                if(item.product.id === action.payload) {
                    item.quantity++
                }
            })
        },
        decrementQuantity: (state, action) => {
            state.cart.map((item) => {
                if(item.product.id === action.payload) {
                    if(item.quantity <= 0) {
                        item.quantity = 0
                    } else {
                        item.quantity--
                    }
                }
            })
        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter((item) => item.product.id !== action.payload);
            state.cart = removeItem;
        },
    }
})

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions
export const { logout } = LoginUser.actions