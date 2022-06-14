import React from 'react'
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout