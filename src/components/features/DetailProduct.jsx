import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { addToCart } from '../services/redux';
import Footer from './Footer';
import Header from './Header';

const DetailProduct = () => {
    const { detailProduct } = useSelector(state => state.detailProduct)
    const dispatch = useDispatch()

    return (
        <>
            <Header />
            {detailProduct ?
                <div className='h-screen'>
                    <div className='h-full flex justify-center items-center bg-white mx-40 mt-4 p-8 rounded-lg'>
                        <div className='w-6/12 h-80 flex justify-center items-center m-4'>
                            <img src={detailProduct.image} alt="" className='w-5/12' />
                        </div>
                        <div className='w-6/12 h-80 flex justify-center items-center flex-col m-4'>
                            <div className="w-full h-full flex justify-start items-start flex-col mb-4">
                                <span className='text-lg'>{detailProduct.title}</span>
                                <span className='text-gray-400'>{detailProduct.category}</span>
                            </div>
                            <div className="w-full h-full mb-1 text-sm"><p>{detailProduct.description}</p></div>
                            <div className="w-full flex justify-start items-end my-5">
                                <div className="w-6/12 text-lg font-bold">$ {detailProduct.price} USD</div>
                                <div className="w-6/12 flex justify-end items-center">
                                    {detailProduct.rating.rate}
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                                </div>
                            </div>
                            <div className="w-full h-full">
                                <button className="w-32 p-2 mr-2 bg-red-100 border border-red-500 text-red-600 hover:bg-gray-50 hover:ease-in-out duration-300 rounded-md" onClick={() => dispatch(addToCart({product: detailProduct, quantity: 1}))}>Add to Cart</button>
                                <span className="text-gray-500 text-xs ml-2">remaining {detailProduct.rating.count}</span>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <h1>Reload Page Failed!</h1>
                </div> 
                }

            <Footer />
        </>
    )
}

export default DetailProduct