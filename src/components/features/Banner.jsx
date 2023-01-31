import React from 'react';
import banner from '../img/banner.jpg'

const Banner = () => {
    return(
        <div className='flex justify-center items-center flex-col w-full h-full' style={{background: '#ded7cf'}}>
            <div className='flex justify-center items-center w-full h-full'>
                <div className='w-6/12 h-full'>
                    <div className='mx-40 flex-col flex justify-center items-start'>
                        <span className='text-2xl text-yellow-700 leading-relaxed font-bold'>Our Best Collection</span>
                        <span className='text-5xl leading-relaxed font-bold'>Just For You</span>
                        <span>We the best way for things what you need</span>
                    </div>
                </div>
                <div className='w-6/12 h-full flex justify-center items-center'>
                    <img src={banner} alt="Banner Image" className='mix-blend-multiply'/>
                </div>
            </div>
        </div>
    )
}

export default Banner