import React from 'react';
import Navbar from '../component/shared/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from './../component/shared/footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Root;