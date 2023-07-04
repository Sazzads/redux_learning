import React from 'react';
import Navbar from '../Pages/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='d-flex justify-content-center'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;