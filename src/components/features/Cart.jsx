import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrement, deleteItem, increment } from '../services/redux';

const Cart = () => {
    const cart = useSelector((state) => state.cart)

    const dispatch = useDispatch()

    const handleDelete = (e) => {
        dispatch(deleteItem(e))
        console.log('delete cart item', dispatch(deleteItem(e)));
    }
    return (
        <div className='mx-32 my-8'>
            <h1 className='text-2xl'>Cart</h1>
                <div className='m-15 flex justify-center items-center flex-col p-3 bg-white border border-gray-400 rounded-md'>
                    {cart ? 
                        cart.map((cartItem) => (
                            <div className='w-full flex justify-center items-center my-4' key={cartItem.id}>
                                <div className='w-6/12 flex justify-center items-center'>
                                    <div className='w-5/12 h-full px-3 flex justify-center items-center'><img src={cartItem.image} alt="Sample Image" className='w-5/12' /></div>
                                    <div className='w-7/12 h-full px-3 flex justify-center items-center text-sm'>{cartItem.id}{cartItem.title}</div>
                                </div>
                                <div className='w-6/12 flex justify-center items-center'>
                                    <div className='w-3/12 flex justify-center items-center'>$ {cartItem.price} USD</div>
                                    <div className='w-3/12 flex justify-center items-center'>
                                        <button className='px-3 border-gray-400 rounded-md bg-red-400 text-white hover:bg-red-500 ease-in-out duration-150' onClick={() => dispatch(decrement(cartItem.id))}>-</button>
                                        <label className='w-full text-center'>{cartItem.quantity}</label>
                                        <button className='px-3 border-gray-400 rounded-md bg-red-400 text-white hover:bg-red-500 ease-in-out duration-150' onClick={() => dispatch(increment(cartItem.id))}>+</button>
                                    </div>
                                    <div className='w-3/12 flex justify-center items-center'>$ 210 USD</div>
                                    <div className='w-3/12 flex justify-center items-center'>
                                        <button className='py-1 px-2 text-xs border border-red-500 text-red-500 hover:bg-red-500 hover:text-white ease-in-out duration-200 rounded-md' onClick={() => handleDelete(cartItem.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    :
                    <div>
                        <h5>Cart is Empty</h5>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart