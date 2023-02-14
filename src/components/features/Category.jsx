import React, { useEffect } from 'react';
import { getAllCategory, getPerCategory } from '../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';

const Category = () => {
    const { data } = useSelector(state => state.category)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCategory())
    }, [])

    const handlePickCategory = (e) => {
        dispatch(getPerCategory(e))
    }

    const displayAllProduct = () => {
        dispatch(getPerCategory(null))
    }

    return (
        <div className='mt-6 mb-6 w-full h-full flex flex-col'>
            <div className='flex justify-center items-center my-6'>
                <div className='w-full pl-4'><hr className='border-black'/></div>
                <div className='w-2/12 py-2 text-2xl font-bold text-black text-center absolute' style={{background: "rgb(237, 237, 237)"}}>Top Category</div>
            </div>
            <div className='flex justify-center items-center h-8 mt-3 pl-4'>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} className="flex justify-center items-center" style={{ margin: "0", height: "100%"}}>
                    <div className='h-full w-1/6 flex justify-center items-center'>
                        <span className='text-sm cursor-pointer ease-in-out duration-150 hover:font-bold hover:border-b-2 hover:border-black text-black' onClick={displayAllProduct}>All Product</span>
                    </div>
                    {data.map((val) => (
                        <Grid item xs={1} sm={1} md={1.5} key={val} className="flex justify-center items-center cursor-pointer" style={{padding: '0'}}>
                            <div onClick={() => handlePickCategory(val)} className='flex justify-center items-center flex-col picker-category'>
                                <span className='h-full text-sm ease-in-out duration-150 hover:font-bold hover:border-b-2 hover:border-black text-black'>{val}</span>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}

export default Category