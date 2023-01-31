import { createSlice } from '@reduxjs/toolkit'
import { getAllCategory, getUser, getAllProduct, getPerCategory, getDetailProduct, getNameUser } from './api';

const initialState = []

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
        isLoading: false,
        detailProduct: []
    },
    extraReducers: {
        [getDetailProduct.fulfilled]: (state, action) => {
            state.isLoading = true
            state.detailProduct = action.payload
        }
    },
})

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, { payload }) {
            const { id } = payload
            const find = state.find((item) => item.id === id)
            if (find) {
                return state.map((item) =>
                    item.id === id ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                        : item
                )
            } else {
                state.push({
                    ...payload,
                    quantity: 1
                })
            }
        },
        increment(state, { payload }) {
            return state.map((item) =>
                item.id === payload ? {
                    ...item,
                    quantity: item.quantity + 1
                }
                    : item
            )
        },
        decrement(state, { payload }) {
            return state.map((item) =>
                item.id === payload ? {
                    ...item,
                    quantity: item.quantity > 0 ? item.quantity - 1 : 0
                }
                    : item
            )
        },
        deleteItem(state, { payload }) {
            const itemId = payload
            state = state.filter((item) => item.id !== itemId)
        },
        clear(state) {
            return []
        }
    }
})

export const { addToCart, increment, decrement, deleteItem } = cartSlice.actions
export const { logout } = LoginUser.actions