import React, { useEffect, useState } from 'react';
import Header from '../features/Header';
import logo from '../img/logo.png'
import ListProduct from '../features/ListProduct';
import Banner from '../features/Banner';
import Footer from '../features/Footer';

export const Home = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <div className='h-full'>
            {loading ?
                (
                    <div className="loader-container">
                        <img src={logo} alt="Logo" />
                    </div>
                )
                :
                (
                    <div className='flex justify-center items-center flex-col'>
                        <Header />
                        <Banner />
                        <ListProduct />
                        <Footer />
                    </div>
                )
            }
        </div>
    )
}