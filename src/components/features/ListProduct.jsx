import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct, getDetailProduct } from '../services/api';
import Category from './Category';

import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ListProduct = () => {
    const { data } = useSelector(state => state.product)
    const { dataCategory } = useSelector(state => state.perCategory)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProduct())
    }, [])

    const handleGoToDetailProduct = (e) => {
        dispatch(getDetailProduct(e))
        navigate('detail-product')
    }

    return (
        <section className='flex justify-center items-center flex-col mx-40 mb-40 h-full'>
            <Category />
            <div className='w-full h-full'>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 15 }} style={{ margin: "auto", width: "auto" }}>
                    {/*---------------------- List Category -------------------*/}
                    {dataCategory.length > 0 ?
                        dataCategory.map((val) => (
                            <Grid item xs={2} sm={3} md={3} key={val.id}>
                                <div className='flex justify-center items-center flex-col h-72 my-2 cursor-pointer list' onClick={() => handleGoToDetailProduct(val.id)}>
                                    <div className='flex justify-center items-center w-full h-full bg-white'>
                                        <img src={val.image} alt="Sample Image" className='w-6/12 h-auto' />
                                    </div>
                                    <div className='w-full py-2 px-2 flex justify-center items-center flex-col'>
                                        <div className='content pt-2 w-full flex justify-center items-center '>
                                            <span className='text-sm font-bold text-center ellipsis'>{val.title}</span>
                                        </div>
                                        <div className='w-full mt-2'>
                                            <div className='w-full h-full flex justify-start items-center'>
                                                <span className='text-xs text-black text-left font-bold'>$ {val.price} USD</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        )) :

                        /*---------------------- List All Product -------------------*/
                        data.map((val) => (
                            <Grid item xs={2} sm={3} md={3} key={val.id}>
                                <div className='flex justify-center items-center flex-col h-72 my-2 cursor-pointer list' onClick={() => handleGoToDetailProduct(val.id)}>
                                    <div className='flex justify-center items-center w-full h-full bg-white'>
                                        <img src={val.image} alt="Sample Image" className='w-6/12 h-auto' />
                                    </div>
                                    <div className='w-full py-2 px-2 flex justify-center items-center flex-col'>
                                        <div className='content pt-2 w-full flex justify-center items-center'>
                                            <span className='text-sm font-bold text-left ellipsis'>{val.title}</span>
                                        </div>
                                        <div className='w-full mt-2 flex flex-row'>
                                            <div className='w-full h-full flex justify-start items-center'>
                                                <span className='text-xs text-black text-left font-bold'>$ {val.price} USD</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </section>
    )
}

export default ListProduct