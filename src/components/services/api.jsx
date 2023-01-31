import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const getUser = createAsyncThunk('user/login', async ({username, password}, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('https://fakestoreapi.com/auth/login', {
            username,
            password
        })
        return data
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const getNameUser = createAsyncThunk('user/name', async (args, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('https://fakestoreapi.com/users')
        return data
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const getAllCategory = createAsyncThunk('list/category', async (args, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('https://fakestoreapi.com/products/categories')
        return data
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const getAllProduct = createAsyncThunk('list/product', async (args, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('https://fakestoreapi.com/products')
        return data
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const getPerCategory = createAsyncThunk('list/perCategory', async (value, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/category/${value}`)
        return data
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const getDetailProduct = createAsyncThunk('list/detailProduct', async (value, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${value}`)
        return data
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})