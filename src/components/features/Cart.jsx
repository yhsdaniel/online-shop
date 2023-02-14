import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, incrementQuantity, decrementQuantity } from '../services/redux';

const Cart = () => {
    const quantityPriceProduct = []
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()

    const totalPrice = () => {
        let result = 0
        quantityPriceProduct.forEach(item => {
            result += Number(item)
        })
        return result.toFixed(2)
    }

    return (
        <>
            <div className='h-10 mb-1 flex justify-start items-center flex-col p-3 text-xs text-gray-500 bg-white border border-gray-400 rounded-md'>
                <div className='w-full flex justify-center items-center h-full text-sm'>
                    <div className='w-6/12 flex justify-center items-center'>
                        <div className='w-4/12 px-3 flex justify-center items-center'>Image</div>
                        <div className='w-8/12 px-3 flex justify-start items-center'>Title Product</div>
                    </div>
                    <div className='w-6/12 flex justify-center items-center'>
                        <div className='w-3/12 flex justify-start items-center'>Price</div>
                        <div className='w-3/12'></div>
                        <div className='w-3/12 flex justify-center items-center'>Total Price</div>
                        <div className='w-3/12'></div>
                    </div>
                </div>
            </div>

            {/* List Cart */}
            <div className='h-96 flex justify-start items-center flex-col text-xs bg-white border border-gray-400 rounded-md overflow-y-auto'>
                {cart?.map((item) => (
                    <div className='w-full flex justify-center items-center my-4' key={item.product.id}>
                        <div className='w-6/12 flex justify-center items-center'>
                            <div className='w-4/12 h-full px-3 flex justify-center items-center'><img src={item.product.image} alt="" className='w-4/12' /></div>
                            <div className='w-8/12 h-full px-3 flex justify-start items-center'>{item.product.title}</div>
                        </div>
                        <div className='w-6/12 flex justify-center items-center'>
                            <div className='w-3/12 flex justify-start items-center'>$ {item.product.price} USD</div>
                            <div className='w-3/12 flex justify-center items-center'>
                                <button className='px-3 border-gray-400 rounded-md bg-red-400 text-white hover:bg-red-500 ease-in-out duration-150' onClick={() => dispatch(decrementQuantity(item.product.id))}>-</button>
                                <label className='w-full text-center px-4'>{item.quantity}</label>
                                <button className='px-3 border-gray-400 rounded-md bg-red-400 text-white hover:bg-red-500 ease-in-out duration-150' onClick={() => dispatch(incrementQuantity(item.product.id))}>+</button>
                            </div>
                            <div className='w-3/12 flex justify-center items-center'>$ {quantityPriceProduct.push((item.quantity * item.product.price).toFixed(2)) && (item.quantity * item.product.price).toFixed(2)} USD</div>
                            <div className='w-3/12 flex justify-center items-center'>
                                <button className='py-1 px-2 text-xs border border-red-500 text-red-500 hover:bg-red-500 hover:text-white ease-in-out duration-200 rounded-md' onClick={() => dispatch(removeItem(item.product.id))}>Remove</button>
                            </div>
                        </div>
                    </div>

                ))}
            </div>

            {/* Total Payment */}
            <div className='h-20 mt-4 flex justify-start items-center flex-col p-3 text-xs bg-white border border-gray-400 rounded-md'>
                <div className='w-full flex justify-center items-center h-full text-sm'>
                    <div className='w-8/12 text-right pr-4 font-bold'>Total Payment</div>
                    <div className='w-1/12'></div>
                    <div className='w-3/12 text-left pl-1 font-bold'>$ {totalPrice()} USD</div>
                </div>
            </div>
        </>
    )
}

export default Cart