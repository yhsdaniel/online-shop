import React from 'react';
import DetailProduct from '../features/DetailProduct';
import Footer from '../features/Footer';
import Header from '../features/Header';

const ListDetailProduct = () => {

    return (
        <div className='flex justify-start items-start flex-col h-screen'>
            <Header />
            <DetailProduct />
            <Footer />
        </div>
    )
}

export default ListDetailProduct