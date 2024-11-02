import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
                    return (
                                       <>
                                        <div className='container mx-auto'>
                                        
                                        <Navbar></Navbar>
                                        <Outlet></Outlet>
                                        </div>
                                        <Footer></Footer>
                                       </>                   
                                        
                    );
};

export default Root;