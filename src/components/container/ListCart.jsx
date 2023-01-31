import React from 'react';
import Cart from '../features/Cart';
import Footer from '../features/Footer';
import Header from '../features/Header';

const ListDetailProduct = () => {

    return(
        <div>
            <div className='mx-32 h-screen'>
                <Header />
                <Cart />
                <Footer />
            </div>
        </div>
    )
}

export default ListDetailProduct