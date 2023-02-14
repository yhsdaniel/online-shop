import React from 'react';
import Cart from '../features/Cart';
import Footer from '../features/Footer';
import Header from '../features/Header';

const ListCart = () => {
    return (
        <div className='h-full'>
            <Header />
            <section className='mx-32 my-8 h-100-208'>
                <h1 className='text-2xl'>Cart</h1>
                <Cart />
            </section>
            <Footer />
        </div>
    )
}

export default ListCart